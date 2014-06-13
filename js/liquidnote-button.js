(function() {
	tinymce.PluginManager.add('liquidnote_mce_button', function( editor, url ) {
		editor.addButton( 'liquidnote_mce_button', {
			text: 'LiquidNote',
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
						},
						{
							text: 'Content Toggle',
							onclick: function() {
								var my_selection = editor.selection.getContent({format: 'text'});
								if(!my_selection) { my_selection = 'Your Contents Here'}
								if(my_selection == '') {my_selection};
								editor.windowManager.open( {
									title: 'Content Toggle Tool',
									body: [
										{
											type: 'textbox',
											name: 'lnContentTitle',
											label: 'Content Title',
											value: 'Your title here'
										},
										{
											type: 'textbox',
											name: 'lnContentText',
											label: 'Content',
											value: my_selection,
											multiline: true,
											minWidth: 300,
											minHeight: 200
										},
										{
											type: 'checkbox',
											name: 'lnContentShow',
											checked: true,
											label: 'Start Open',
											text: 'Checked is open'
										}
									],
									onsubmit: function( e ) {
										editor.insertContent(  ln_content_toggle_tool(e) );
									}
								}); // end of editor.windowManager
							} // end of onClick function

							
						}
						
					]
				}, //end first sub menu
			/*
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
				},
*/ //end second sub menu
				{
					text: 'LiquidNote Builder',
					menu: [
						{
							text: 'Add Annotate',
							onclick: function() {
								var my_selection = editor.selection.getContent({format: 'text'}); 
								if(!my_selection) { my_selection = 'your link text here'}
								if(my_selection == '') {my_selection};
								editor.windowManager.open( {
									title: 'Annotate Media Tool',
									body: [
										{
											type: 'textbox',
											name: 'lnTitle',
											label: 'Annotation Title',
											value: 'My title'
										},
										{
											type: 'textbox',
											name: 'lnLinkText',
											label: 'Linked Text',
											value: my_selection
										},
										{
											type: 'textbox',
											name: 'lnEmbed',
											label: 'Media Link',
											value: 'http://youtu.be/l5ODwR6FPRQ',
											multiline: true,
											minWidth: 300,
											minHeight: 100
										},
										{
											type: 'textbox',
											name: 'lnCaption',
											label: 'Caption',
											value: '',
											multiline: true,
											minWidth: 300,
											minHeight: 100
										},
										{
											type: 'listbox',
											name: 'lnType',
											label: 'Type',
											'values': [
												{text: 'Video', value: 'video'},
												{text: 'Sound', value: 'sound'},
												{text: 'Image', value: 'image'},
												{text: 'Text', value: 'text'}
											]
										}

									],
									onsubmit: function( e ) {
										editor.insertContent(  lb_shortcode_tool(e) );
									}
								}); // end of editor.windowManager
							} // end of onClick function
						}, //end of in pop-out menu curly brackets
					] // end menu pop-out
				} //end third sub menu
			]
		});
	});
})();
/* liquidnote functions  */ 
//  [liquidnote-button id="123456789" type="video"]your link text[/liquidnote-button]
//  [liquidnote-content id="123456789" type="video"]your annotated content[/liquidnote-content]
function lb_shortcode(type) {
	var argc = arguments.length;
	  if (argc === 0) {
	    type = 'text';
	  }
	  var  id = mt_rand();
	  var lb_button = ln_button_sc(id,type);
	  var lb_content = lb_content_sc(id,type);
	  return lb_button + lb_content;
}
function lb_shortcode_tool(e) {
	var argc = arguments.length;
	  if (argc === 0) {
	    type = 'video';
	  }
	  var  id = mt_rand();
	  var lb_button = ln_button_link(id,e);
	  var lb_content = lb_content_builder(id, e);
	  return lb_button + lb_content;
}
function ln_button_sc(id,type) {
	var my_button = '[lna_link id="noteid' + id + '" type="' + type + '" text="your link"]';
	return my_button;	
}
function lb_content_sc(id,type){
	var my_content = '[lna_content id="noteid' + id + '" type="' + type + '"]your annotated content[/lna_content]';
	return my_content;	
}
function ln_button_link(id,e){
	var my_button = '[lna_link id="noteid' + id + '" type="' + e.data.lnType + '" text="' + e.data.lnLinkText + '"]';
	return my_button;	
}
function lb_content_builder(id,e){
	var my_content ='';
	if(e.data.lnTitle) {
		var my_title = '[lna_header title="' + e.data.lnTitle + '"]';
		my_content += my_title;
	}
	if(e.data.lnType=='image') {
		var my_embed = '<img src="' + e.data.lnEmbed + '" title="' + e.data.lnTitle + '" alt="' + e.data.lnTitle + '" width="100%">';
		my_content += my_embed;
	} else if(e.data.lnType=='text') {
		var my_embed = e.data.lnEmbed;
		my_content += my_embed;
	} else {
		var my_embed = ' [lna_embed link="' + e.data.lnEmbed + '"] ';
		my_content += my_embed;
	}
	
	if(e.data.lnCaption) {
		var my_caption = '[lna_caption]' + e.data.lnCaption + '[/lna_caption]';
		my_content += my_caption;
	}
	var my_shortcode = '[lna_content id="noteid' + id + '" type="' + e.data.lnType + '"]' + my_content + '[/lna_content]';
	return my_shortcode;	
}
/*  toggle contents shortcode generator  */
/* [lna_toggle title="Your title here"][/lna_toggle]  */
/*  [lb_toggle title="Software Engineer (distributed systems)" opened="yes"]  */

function ln_content_toggle_tool(e){
	  var showContent = '';
	  if( e.data.lnContentShow ) { 
		  showContent = 'opened="yes"';
	  }
	  var my_toggle = '[lna_toggle title="' + e.data.lnContentTitle + '" ' + showContent + ']';
	  my_toggle += e.data.lnContentText;
	  my_toggle += '[/lna_toggle]';
	  return my_toggle;
}


function ln_toggle_sc(id,type){
	var my_button = '[lna_link id="noteid' + id + '" type="' + type + '" text="your link"]';
	return my_button;	
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
function cl(my_value){
	console.log(my_value);
}
