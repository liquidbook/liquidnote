<?php
/*
Plugin Name: Liquidnote Plugin
Plugin URI: www.liquidbook.com
Description: This plugin is an addon for Delaware Professional Development Now - Do not deactive without talking with a website administrator.
Version: 1.1
Author: Felipe Lujan-Bear
Author URI: www.liquidbook.com

 * License: GPLv2 or later
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

*/

define('LIQUIDNOTE_VERSION', '1.1');
define('LIQUIDNOTE_BASE_URL', plugin_dir_url(__FILE__));
define('LIQUIDNOTE_BASE_DIR_LONG', dirname(__FILE__));
define('LIQUIDNOTE_INC_DIR', LIQUIDNOTE_BASE_DIR_LONG . '/inc/');
define('LIQUIDNOTE_JS_DIR', LIQUIDNOTE_BASE_DIR_LONG . '/js/');
define('LIQUIDNOTE_CSS_DIR', LIQUIDNOTE_BASE_DIR_LONG . '/css/');

function liquidnote_enqueue_items() {
    wp_register_script( 'liquidnote-script', plugins_url('js/liquidnote-script.js',  __FILE__) , array( 'jquery' ),'1.0',true );
	wp_register_style('liquidnote_style', plugins_url('css/liquidnote_style.css', __FILE__),'','1.0');
	wp_register_style('lb_font_awesome', plugins_url('css/font-awesome.min.css', __FILE__),'','4.0.3');
	
    wp_enqueue_script( 'liquidnote-script' );
    wp_enqueue_style('liquidnote_style');
     wp_enqueue_style('lb_font_awesome');

}
 
add_action( 'wp_enqueue_scripts', 'liquidnote_enqueue_items' );


/*------------------------------------------------------------------
/* Including Project functions
/*------------------------------------------------------------------*/

require_once( LIQUIDNOTE_INC_DIR . 'admin_tool.php' );
require_once( LIQUIDNOTE_INC_DIR . 'liquidnote_shortcode.php' );

?>