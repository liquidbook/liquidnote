(function() {

    tinymce.PluginManager.add('lbshortcodes', function( editor )
    {
        var shortcodeValues = [];
        jQuery.each(shortcodes_button, function(i)
        {
            shortcodeValues.push({text: shortcodes_button[i], value:i});
        });

        editor.addButton('lbshortcodes', {
            type: 'listbox',
            text: 'Shortcodes',
            onselect: function(e) {
                var v = e.control._value;

                var content = '';
                var dialogForm = '<table>';

                if(shortcodes_form[v] != undefined)
                {
                    dialogForm += shortcodes_form[v];

                    if(dialogForm != '<table>')
                    {
                        dialogForm += '</table>';
                        jQuery('.shortcode-dialog-form').empty();
                        jQuery('.shortcode-dialog-form').append(dialogForm);

                        jQuery("#shortcode-dialog").dialog({
                            width: 700,
                            resizable: false,
                            buttons: {
                                "Add Shortcode": function(){
                                    var formArray = jQuery('.shortcode-dialog-form').serializeArray();

                                    if(formArray.length > 0)
                                    {
                                        content = '[' + v + ' ';

                                        jQuery(formArray).each(function(i){
                                            content += jQuery(this)[0].name + '="'+ jQuery(this)[0].value +'" ';
                                        });

                                        content += '][/' + v + ']';
                                    }

                                    tinyMCE.activeEditor.selection.setContent( content );
                                    jQuery( this ).dialog( "close" );
                                }
                            }
                        });
                    }
                } else {
                    tinyMCE.activeEditor.selection.setContent( '[' + v + '][/' + v + ']' );
                }
            },
            values: shortcodeValues
        });
    });
})();