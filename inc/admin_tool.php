<?php
/*****************************/
/* Author: Felipe Lujan-Bear */
/* plugin: liquidnote */
/*****************************/

// Hooks liquidnote functions into the correct filters
function liquidnote_add_mce_button() {
	// check user permissions
	if ( !current_user_can( 'edit_posts' ) && !current_user_can( 'edit_pages' ) ) {
		return;
	}
	// check if WYSIWYG is enabled
	if ( 'true' == get_user_option( 'rich_editing' ) ) {
		add_filter( 'mce_external_plugins', 'liquidnote_add_tinymce_plugin' );
		add_filter( 'mce_buttons', 'liquidnote_register_mce_button' );
	}
}
add_action('admin_head', 'liquidnote_add_mce_button');

// Declare script for liquidnote_mce_button
function liquidnote_add_tinymce_plugin( $plugin_array ) {
	$plugin_array['liquidnote_mce_button'] = LIQUIDNOTE_BASE_URL .'js/liquidnote-button.js';
	return $plugin_array;
}
// Register liquidnote_mce_button in the editor
function liquidnote_register_mce_button( $buttons ) {
	array_push( $buttons, 'liquidnote_mce_button' );
	return $buttons;
}
/*  Load admin css */
function liquidnote_shortcodes_mce_css() {
	//wp_enqueue_style('simple_shortcodes-tc', plugins_url(LIQUIDNOTE_CSS_DIR + 'my-mce-style.css', LIQUIDNOTE_BASE_DIR_LONG) );
	wp_enqueue_style('ln_admin_style', plugins_url('/css/admin_style.css', LIQUIDNOTE_CSS_DIR) );
}
add_action( 'admin_enqueue_scripts', 'liquidnote_shortcodes_mce_css' );
?>