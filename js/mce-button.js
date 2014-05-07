(function() {
	tinymce.PluginManager.add('my_mce_button', function( editor, url ) {
		editor.addButton('my_mce_button', {
			text: 'false',
			icon: 'my-mce-icon',
			onclick: function() {
				editor.insertContent('Liquidbook.com is awesome!');
			}
		});
	});
})();