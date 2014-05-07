<?
//adds a shortcode button to editor menu - 
//add shortcode button to ACF if being used
//shortcode button will generate three items

if( current_user_can('edit_posts') &&  current_user_can('edit_pages') )
{
	// if admin load shortcode
	//$shortcodes = new Liquidnote_Shortcode_Button();
}

class Liquidnote_Shortcode_Button
{
	public function __construct()
	{
		$this->Admin();
		
		add_action('admin_init', array($this, 'lb_shortcode_button'));
		add_action('admin_footer', array($this, 'lb_get_shortcodes'));
	}
	
	
	public function lb_shortcode_button()
    {
		if( current_user_can('edit_posts') &&  current_user_can('edit_pages') )
        {
            add_filter( 'mce_external_plugins', array($this, 'lb_add_buttons' ));
            add_filter( 'mce_buttons', array($this, 'lb_register_buttons' ));
        }
    }

    public function lb_add_buttons( $plugin_array )
    {
		$plugin_array['lbshortcodes'] = plugin_dir_url( __FILE__ ) . 'js/shortcode-tinymce-button.js';

        return $plugin_array;

    }
    
    public function lb_register_buttons( $buttons )
    {
			array_push( $buttons, 'separator', 'lbshortcodes' );
        return $buttons;
    }

    public function lb_get_shortcodes()
    {
		global $shortcode_tags;

        echo '<script type="text/javascript">
        var shortcodes_button = new Array();';
		echo '/*lb_get_shortcodes*/';

        $count = 0;

        foreach($shortcode_tags as $tag => $code)
        {
            echo "shortcodes_button[{$count}] = '{$tag}';";
			/* shortcodes_button[0] = 'embed' */
            $count++;
        }

        echo '</script>';
    }

	
	/**
	 * Create the admin area
	 */
	public function Admin(){
		add_action( 'admin_menu', array(&$this,'Admin_Menu') );
	}

	/**
	 * Function for the admin menu to create a menu item in the settings tree
	 */
	public function Admin_Menu(){
		add_submenu_page(
			'options-general.php',
			'Annotate Content',
			'Annotate Content',
			'manage_options',
			'annotate-content',
			array(&$this,'Display_Admin_Page'));
	}

	/**
	 * Display the admin page
	 */
	public function Display_Admin_Page(){
		global $shortcode_tags;

        ?>
        <div class="wrap">
        	<div id="icon-options-general" class="icon32"><br></div>
			<h2>Annotate Content</h2>
			<div class="section panel">
				<p>This page will display all of the available shortcodes that you can use on your Wordpress blog.</p>
        	<table class="widefat importers">
        		<tr><td><strong>Shortcodes</strong></td></tr>
        <?php

	        foreach($shortcode_tags as $code => $function)
	        {
	        	?>
	        		<tr><td>[<?php echo $code; ?>]</td></tr>
	        	<?php
	        }
	    ?>

			</table>
			</div>
		</div>
		<?php
	}
} // END class View_All_Available_Shortcodes


?>