(function() {
	tinymce.PluginManager.add('liquidnote_mce_button', function( editor, url ) {
		editor.addButton( 'liquidnote_mce_button', {
			text: false,
			icon: 'liquidnote-icon',
			type: 'menubutton',
			menu: [
				{
					text: 'Liquidnote Shortcode',
					menu: [
						{
							text: 'Video Annotation',
							onclick: function() {
								editor.insertContent( lb_shortcode('video'));
							}
						},
						{
							text: 'Image Annotation',
							onclick: function() {
								editor.insertContent( lb_shortcode('image'));
							}
						},
						{
							text: 'Sound Annotation',
							onclick: function() {
								editor.insertContent( lb_shortcode('sound'));
							}
						},
						{
							text: 'Text Annotation',
							onclick: function() {
								editor.insertContent( lb_shortcode('text'));
							}
						}
						
					]
				}, //end first sub menu
				{
					text: 'Pause',
					menu: [
						{
							text: 'is awesome',
							onclick: function() {
								editor.insertContent('Pause.com is awesome!');
							}
						},
						{
							text: 'is really awesome',
							onclick: function() {
								editor.insertContent('Pause.com is really awesome!');
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
/* liquidnote functions  */ 
//  [liquidnote-button id="123456789" type="video"]your link text[/liquidnote-button]
//  [liquidnote-content id="123456789" type="video"]your annotated content[/liquidnote-content]
function lb_shortcode(type){
	var argc = arguments.length;
	  if (argc === 0) {
	    type = 'text';
	  }
	  var  id = mt_rand();
	  var lb_button = ln_button_sc(id,type);
	  var lb_content = lb_content_sc(id,type);
	  return lb_button + lb_content;
}

function ln_button_sc(id,type){
	var my_button = '[lna_link id="noteid' + id + '" type="' + type + '" text="your link"]';
	return my_button;	
}
function lb_content_sc(id,type){
	var my_content = '[lna_content id="noteid' + id + '" type="' + type + '"]your annotated content[/lna_content]';
	return my_content;	
}

/* support functions */
function mt_rand(min, max) {
  //  discuss at: http://phpjs.org/functions/mt_rand/
  // original by: Onno Marsman
  // improved by: Brett Zamir (http://brett-zamir.me)
  //    input by: Kongo
  //   example 1: mt_rand(1, 1);
  //   returns 1: 1

  var argc = arguments.length;
  if (argc === 0) {
    min = 0;
    max = 2147483647;
  } else if (argc === 1) {
    throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');
  } else {
    min = parseInt(min, 10);
    max = parseInt(max, 10);
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
