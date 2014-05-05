jQuery(document).ready(function ($) { //noconflict wrapper

    var iconUp = 'fa-angle-double-up';
    var iconDown = 'fa-angle-double-down';
    var textExpand = 'Expand';
    var textCollapse = 'Collapse';

    $('.expand_course_detail').click(

    function () {
        if ($('.learndash_topic_dots').is(':visible')) {
            $('.learndash_topic_dots').slideUp();
            $(this).removeClass('expanded');
            $(this).addClass('collapsed');
            $(this).find('span').html(textExpand);
            $(this).find('i').removeClass(iconUp);
            $(this).find('i').addClass(iconDown);
        } else {

            $('.learndash_topic_dots').slideDown();
            $(this).removeClass('collapsed');
            $(this).addClass('expanded');
            $(this).find('span').html(textCollapse);
            $(this).find('i').removeClass(iconDown);
            $(this).find('i').addClass(iconUp);
        }
        return false;
    }

    ); // ends .expand_course_detail

    $('.expand_mycourse_detail').click(

    function () { // exanding
        if ($(this).is('.collapsed')) {
            $('.flip').slideDown();
            $('.list_arrow').removeClass('collapse');
            $('.list_arrow').addClass('expand');
            $(this).removeClass('collapsed');
            $(this).addClass('expanded');
            $(this).find('span').html(textCollapse);
            $(this).find('i').removeClass(iconDown);
            $(this).find('i').addClass(iconUp);
        } else if ($(this).is('.expanded')) {
            $('.flip').slideUp();
            $('.list_arrow').removeClass('expand');
            $('.list_arrow').addClass('collapse');
            $(this).removeClass('expanded');
            $(this).addClass('collapsed');
            $(this).find('span').html(textExpand);
            $(this).find('i').removeClass(iconUp);
            $(this).find('i').addClass(iconDown);
        }

        return false;
    }); // ends .expand_mycourse_detail

}); //end noconflict