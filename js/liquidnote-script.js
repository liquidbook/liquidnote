jQuery(document).ready(function ($) { //noconflict wrapper

    $('.annotate-button').click(

    function () {
        var trigger_id = $(this).attr('id');
        var trigger_container = '.' + trigger_id;
        var trigger = '#' + trigger_id;
        var my_id = trigger_id.substring(6, trigger_id.length);

        if($(trigger_container).is(":hidden")){
            	$(trigger_container).insertAfter(trigger);
				$(trigger_container).toggle('slow');
        } else if($(trigger_container).is(":visible")) {
            	$(trigger_container).toggle('fast', function(){
				$(trigger_container).appendTo("body");
            });
        }
        return false;
    }); // end .annotate-button.click
    $('.annotate-closebox').click(

    function () {
        var trigger_container = $(this).parent().get(0);
        var trigger_src = $(this).parent().find('iframe').attr("src");        
        $(trigger_container).toggle('fast', function() {
                $(trigger_container).appendTo("body");
            }); 
        return false;
    }); // end .annotate-button.click      
    
    
   /*  The title triggers the expand/collapse of the next nearest contents block */
    $('.lna-trigger').click(
        
        function () {
            var clickedMe = $(this);
            clickedMe.nextAll('.lna-target').first().slideToggle('fast' , function() {
                if($(this).is(':hidden')){
                    clickedMe.addClass('closed');
                //console.log('hidden +');
                } else {
                    clickedMe.removeClass('closed');
                //console.log('visible');    
                } 
                //console.log(this);
            });
            
        }); // end .item-title


}); //end noconflict