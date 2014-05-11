/*
(function() {
	tinymce.PluginManager.add('liquidnote_mce_button', function( editor, url ) {
		editor.addButton('liquidnote_mce_button', {
			text: 'PepperData',
			icon: 'my-mce-icon',
			onclick: function() {
				editor.insertContent('Liquidbook.com is awesome!');
			}
		});
	});
})();
*/

(function() {
	tinymce.PluginManager.add('liquidnote_mce_button', function( editor, url ) {
		editor.addButton( 'liquidnote_mce_button', {
			text: false,
			icon: 'liquidnote-icon',
			type: 'menubutton',
			menu: [
				{
					text: 'Revivalcreative',
					menu: [
						{
							text: 'is awesome',
							onclick: function() {
								editor.insertContent('Revivalcreative.com is awesome!');
							}
						},
						{
							text: 'is really awesome',
							onclick: function() {
								editor.insertContent('Revivalcreative.com is really awesome!');
							}
						}
					]
				}, //end first sub menu
				{
					text: 'DeluxePDX',
					menu: [
						{
							text: 'is awesome',
							onclick: function() {
								editor.insertContent('Deluxepdx.com is awesome!');
							}
						},
						{
							text: 'is really awesome',
							onclick: function() {
								editor.insertContent('Deluxepdx.com is really awesome!');
							}
						}
					]
				}, //end second sub menu
				{
					text: 'Shortcode Builder',
					menu: [
						{
							text: 'Pop-Up',
							onclick: function() {
								editor.windowManager.open( {
									title: 'Client Name Shortcode Tool',
									body: [
										{
											type: 'textbox',
											name: 'textboxName',
											label: 'Text Box',
											value: '30'
										},
										{
											type: 'textbox',
											name: 'multilineName',
											label: 'Multiline Text Box',
											value: 'You can say a lot of stuff in here',
											multiline: true,
											minWidth: 300,
											minHeight: 100
										},
										{
											type: 'listbox',
											name: 'listboxName',
											label: 'List Box',
											'values': [
												{text: 'Option 1', value: '1'},
												{text: 'Option 2', value: '2'},
												{text: 'Option 3', value: '3'}
											]
										}
									],
									onsubmit: function( e ) {
										editor.insertContent( '[client_shortcode textbox="' + e.data.textboxName + '" multiline="' + e.data.multilineName + '" listbox="' + e.data.listboxName + '"]');
									}
								});
							}
						}
					]
				}//end third sub menu
			]
		});
	});
})();
