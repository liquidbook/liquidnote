<?php
/*****************************/
/* Author: Felipe Lujan-Bear */
/* plugin: liquidnote */
/*****************************/

/* returns the liquidnote_link shortcode as a link with an icon */
function liquidnote_link($atts) {

	// Attributes
	extract( shortcode_atts(
		array(
			'id'=> '',
			'type' => 'video',
			'text' => '',
		), $atts )
	);
	if($type=='video'){
		$my_link = '<a href="#" id="' . $id . '" class="annotate-button">' . $text . ' <i class="fa fa-video-camera"></i></a>';
	}
	if($type=='image'){
		$my_link = '<a href="#" id="' . $id . '" class="annotate-button">' . $text . ' <i class="fa fa-picture-o"></i></a>';
	}
	if($type=='sound'){
		$my_link = '<a href="#" id="' . $id . '" class="annotate-button">' . $text . ' <i class="fa fa-volume-up"></i></a>';
	}
	if($type=='text'){
		$my_link = '<a href="#" id="' . $id . '" class="annotate-button">' . $text . ' <i class="fa fa-video-camera"></i></a>';
	}
	return $my_link;
	
}
add_shortcode( 'lna_link', 'liquidnote_link' );

/* tests content type and calls liquidnote_content_build */
function liquidnote_content( $atts , $content = null ) {
	
	// Attributes
	extract( shortcode_atts(
		array(
			'type' => 'video',
			'id' => '',
		), $atts )
	);
	
	if($type=='video'){ $my_content = liquidnote_content_build($id,'lnvideo',$content);	}
	if($type=='image'){ $my_content = liquidnote_content_build($id,'lnimage',$content);	}
	if($type=='sound'){ $my_content = liquidnote_content_build($id,'lnsound',$content);	}
	if($type=='text'){ $my_content = liquidnote_content_build($id,'lntext',$content);	}
	return $my_content;
	
}
add_shortcode( 'lna_content', 'liquidnote_content' );

/* returns the liquidnote_content shortcode as a hidden div block  */
/*  to be accessed by the liquidnote link */
function liquidnote_content_build($id,$style,$content) {
	$my_content =  '<div class="' . $id . ' annotate-box ' . $style . '" style="display:none;">';
    $my_content .=  '<div class="annotate-closebox"><a href="#"><i class="fa fa-times-circle fa-2x"></i></a></div>'; 
    $my_content .= do_shortcode($content);
    $my_content .= '</div>';
    return $my_content;
}

/* test oembed code. if it fails to load then it returns an error message */
function liquidnote_oembed($atts) {
	extract( shortcode_atts(
		array(
			'link'=> '',
		), $atts )
	);
	$embed_code = wp_oembed_get($link);
	if(!$embed_code){
		$my_return = '<p class="ln-embed-error">There was an issue loading the embedded link.</p>';
		/* $my_return = '<p class="ln-embed-error">'. _e('There was an issue loading the embedded link.') .'</p>'; */
	} else {
		$my_return = '<span class="ln-embed">'.$embed_code.'</span>';
			}
	return $my_return;		
}
add_shortcode( 'lna_embed', 'liquidnote_oembed' );

function liquidnote_header($atts){
	// Attributes
	extract( shortcode_atts(
		array(
			'title' => '',
			'html' => 'h2',
			'css' => 'lna-title',
		), $atts )
	);
	$my_return = '<'.$html.' class="'.$css.'">'.$title.'</'.$html.'>';
	return $my_return;
}
add_shortcode('lna_header','liquidnote_header');

function liquidnote_caption($atts,$content = null){
	// Attributes
	extract( shortcode_atts(
		array(
			'html' => 'span',
			'css' => 'lna-caption',
		), $atts )
	);
	if($content!==''){
		$my_return = '<'.$html.' class="'.$css.'">'.do_shortcode($content).'</'.$html.'>';
		return $my_return;
	}
}
add_shortcode('lna_caption','liquidnote_caption');

?>