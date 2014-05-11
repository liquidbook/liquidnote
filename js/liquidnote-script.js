jQuery(document).ready(function ($) { //noconflict wrapper

    $('.annotate-button').click(

    function () {
        var trigger_id = $(this).attr('id');
        var trigger_container = '.' + trigger_id;
        var my_id = trigger_id.substring(6, trigger_id.length);

        if ($(trigger_container).hasClass("lnvideo")) {
            var video_id = "#video" + my_id;
            var video = $(video_id).attr("src");
            //console.log("it has a video class");
            $(video_id).attr('src', '');
            $(video_id).attr('src', video);
        }

        if ($(trigger_container).hasClass("lnsound")) {
            //var video_id = "#video" + my_id;
            var sound_src = $(trigger_container + " iframe").attr("src");
            //console.log("it has a sound class");
            //console.log(sound_src);
            $(trigger_container + ' iframe').attr('src', '');
            $(trigger_container + ' iframe').attr('src', sound_src);
            console.log($(trigger_container));
        }

        $(trigger_container).toggle('slow');
        //console.log(video);
        return false;
    }); // end .annotate-button.click
    $('.annotate-closebox').click(

    function () {
        var trigger_container = $(this).parent().get(0);
        var trigger_src = $(this).parent().find('iframe').attr("src");
        $(trigger_container).toggle('fast');
        if ($(this).parent().has('iframe')) {
            $(this).parent().find('iframe').attr('src', '');
            $(this).parent().find('iframe').attr('src', trigger_src);
            console.log(trigger_src);
        }


        return false;
    }); // end .annotate-button.click      

}); //end noconflict