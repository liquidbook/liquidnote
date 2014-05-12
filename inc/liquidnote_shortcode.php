<?php
// Add liquidnote_link Shortcode
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

// Add Shortcode
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

function liquidnote_content_build($id,$style,$content) {
	$my_content =  '<div class="' . $id . ' annotate-box ' . $style . '" style="display:none;">';
    $my_content .=  '<div class="annotate-closebox"><a href="#"><i class="fa fa-times-circle fa-2x"></i></a></div>'; 
    $my_content .= $content;
    $my_content .= '</div>';
    return $my_content;
}

?>