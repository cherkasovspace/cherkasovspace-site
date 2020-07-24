$(function() {
  $('.tabpanel__panel input').click(function(){
    let indexTab = $('.tabpanel__tab').index($('.tabpanel__tab:checked'));
    $('.tabpanel__tab').eq(++indexTab).click();
  });
});

$(document).ready(function() {
  $('.popup-youtube').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
});

function getUrlVars() {
    var vars = {};
    var href = document.URL ? document.URL : window.location.href;
    href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
};
(function(){
    'use strict';
    var urlVars = getUrlVars();
    var findDynamicPhrases = new RegExp('\#(.*?)\#', 'g');
    var findPercent = new RegExp('#', 'g');
    var sections = $('.change-title');
    var sectionstwo = $('.change-subtitle');
    function escapeOutput(toOutput){
      return toOutput.replace(/\&/g, '&')
        .replace(/\</g, '<')
        .replace(/\>/g, '>')
        .replace(/\"/g, '"')
        .replace(/\'/g, '&#x27')
        .replace(/\//g, '&#x2F');
    }

    function convertPhrase(string) {
        string = string.replace(findPercent, '').split('||');
        var dynamic = string[0];
        var fallback = string[1];
        var result = fallback;
        if ($.isEmptyObject(urlVars)) {
            return result;
        }
        $.each(urlVars, function (key, value) {
            if (value === '') {
                return false;
            }
            var findKey = new RegExp('{{'+key+'}}', 'g');
            if (dynamic.match(findKey)) {
                result = dynamic.replace(findKey, decodeURIComponent(value));
                return false;
            }
        });
        return escapeOutput(result);
    }

    sections.html(function(i, old){
        return old.replace(findDynamicPhrases, convertPhrase);
    });
    sectionstwo.html(function(i, old){
        return old.replace(findDynamicPhrases, convertPhrase);
    });
})();