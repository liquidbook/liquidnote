<?php
/*
Plugin Name: Annotate Plugin
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

function liquidnote_scripts_with_jquery()
{
	// Register the script like this for a theme:
	wp_register_script( 'annotate-plugin-script', plugins_url(LIQUIDNOTE_JS_DIR + 'annotate-plugin.js', LIQUIDNOTE_BASE_DIR_LONG) , array( 'jquery' ),'1.0',true );
	// For either a plugin or a theme, you can then enqueue the script:
	wp_enqueue_script( 'annotate-plugin-script' );
	// Register the script like this for a theme:
	
}
add_action( 'wp_enqueue_scripts', 'liquidnote_scripts_with_jquery' );

/*------------------------------------------------------------------
/* Including Project functions
/*------------------------------------------------------------------*/
//require_once( LIQUIDNOTE_INC_DIR . 'widgets.php' );
require_once( LIQUIDNOTE_INC_DIR . 'shortcode.php' );

?>