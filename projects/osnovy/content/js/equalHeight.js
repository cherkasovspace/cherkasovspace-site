$(document).ready(function() {
     function setEqualHeight(columns){
         var tallestcolumn = 0;
         columns.each(function(){
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn){
                tallestcolumn  = currentHeight;
            }
        });
        columns.height(tallestcolumn);
     }
     setEqualHeight($(".block2 .vot p"));
});