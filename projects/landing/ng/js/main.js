$(document).ready(function() {
  $(".toggle-accordion").on("click", function() {
    var accordionId = $(this).attr("accordion-id"),
      numPanelOpen = $(accordionId + ' .collapse.in').length;

    $(this).toggleClass("active");

    if (numPanelOpen == 0) {
      openAllPanels(accordionId);
    } else {
      closeAllPanels(accordionId);
    }
  })

  openAllPanels = function(aId) {
    $(aId + ' .panel-collapse:not(".in")').collapse('show');
  }
  closeAllPanels = function(aId) {
    $(aId + ' .panel-collapse.in').collapse('hide');
  }

});


$(document).ready(function() {
  $(".toggle-accordion-two").on("click", function() {
    var accordionIdTwo = $(this).attr("accordion-id-two"),
      numPanelOpen = $(accordionIdTwo + ' .collapse.in').length;

    $(this).toggleClass("active");

    if (numPanelOpen == 0) {
      openAllPanels(accordionIdTwo);
    } else {
      closeAllPanels(accordionIdTwo);
    }
  })

  openAllPanels = function(aId) {
    $(aId + ' .panel-collapse:not(".in")').collapse('show');
  }
  closeAllPanels = function(aId) {
    $(aId + ' .panel-collapse.in').collapse('hide');
  }

});

$(document).ready(function() {
  $(".toggle-accordion-three").on("click", function() {
    var accordionIdThree = $(this).attr("accordion-id-three"),
      numPanelOpen = $(accordionIdThree + ' .collapse.in').length;

    $(this).toggleClass("active");

    if (numPanelOpen == 0) {
      openAllPanels(accordionIdThree);
    } else {
      closeAllPanels(accordionIdThree);
    }
  })

  openAllPanels = function(aId) {
    $(aId + ' .panel-collapse:not(".in")').collapse('show');
  }
  closeAllPanels = function(aId) {
    $(aId + ' .panel-collapse.in').collapse('hide');
  }

});

$(document).ready(function() {
  $(".toggle-accordion-four").on("click", function() {
    var accordionIdFour = $(this).attr("accordion-id-four"),
      numPanelOpen = $(accordionIdFour + ' .collapse.in').length;

    $(this).toggleClass("active");

    if (numPanelOpen == 0) {
      openAllPanels(accordionIdFour);
    } else {
      closeAllPanels(accordionIdFour);
    }
  })

  openAllPanels = function(aId) {
    $(aId + ' .panel-collapse:not(".in")').collapse('show');
  }
  closeAllPanels = function(aId) {
    $(aId + ' .panel-collapse.in').collapse('hide');
  }

});

$(document).ready(function() {
  $(".toggle-accordion-five").on("click", function() {
    var accordionIdFive = $(this).attr("accordion-id-five"),
      numPanelOpen = $(accordionIdFive + ' .collapse.in').length;

    $(this).toggleClass("active");

    if (numPanelOpen == 0) {
      openAllPanels(accordionIdFive);
    } else {
      closeAllPanels(accordionIdFive);
    }
  })

  openAllPanels = function(aId) {
    $(aId + ' .panel-collapse:not(".in")').collapse('show');
  }
  closeAllPanels = function(aId) {
    $(aId + ' .panel-collapse.in').collapse('hide');
  }

});

$(document).ready(function() {
  $(".toggle-accordion-six").on("click", function() {
    var accordionIdSix = $(this).attr("accordion-id-six"),
      numPanelOpen = $(accordionIdSix + ' .collapse.in').length;

    $(this).toggleClass("active");

    if (numPanelOpen == 0) {
      openAllPanels(accordionIdSix);
    } else {
      closeAllPanels(accordionIdSix);
    }
  })

  openAllPanels = function(aId) {
    $(aId + ' .panel-collapse:not(".in")').collapse('show');
  }
  closeAllPanels = function(aId) {
    $(aId + ' .panel-collapse.in').collapse('hide');
  }

});