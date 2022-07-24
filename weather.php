<?php
/**
 * Plugin Name:       Weather
 * Description:       Displays a set of weather conditions
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Will Sides
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       weather
 *
 * @package           willsides
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function willsides_weather_block_init() {
	wp_enqueue_style(
		'weather-icons-style',
		plugins_url( 'assets/weather-icons/css/weather-icons.min.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'assets/weather-icons/css/weather-icons.min.css' )
	);
	wp_enqueue_style(
		'weather-icons-wind-style',
		plugins_url( 'assets/weather-icons/css/weather-icons-wind.min.css', __FILE__ ),
		array(),
		filemtime( plugin_dir_path( __FILE__ ) . 'assets/weather-icons/css/weather-icons-wind.min.css' )
	);

	register_block_type( __DIR__ );	
}
add_action( 'init', 'willsides_weather_block_init' );