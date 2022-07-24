/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
 import { registerBlockType } from '@wordpress/blocks';

 /**
  * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
  * All files containing `style` keyword are bundled together. The code used
  * gets applied both to the front of your site and to the editor.
  *
  * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
  */
 import './style.scss';
 
 /**
  * Internal dependencies
  */
 import Edit from './edit';
 import save from './save';
 
 /**
  * Every block starts by registering a new block type definition.
  *
  * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
  */
 registerBlockType( 'willsides/weather', {
	 apiVersion: 2,
 
	 attributes: {
		 dayconditions: {
			 type: 'string',
		 },
		 hightemp: {
			 type: 'string',
		 },
		 nightconditions: {
			 type: 'string',
		 },
		 lowtemp: {
			 type: 'string',
		 },
		 windspeed: {
			 type: 'string',
		 },
		 winddir: {
			 type: 'string',
		 },
		 humidity: {
			 type: 'string',
		 },
		 raininches: {
			 type: 'string',
		 },
		 snowinches: {
			 type: 'string',
		 },
	 },
 
	 /**
	  * @see ./edit.js
	  */
	 edit: Edit,
 
	 /**
	  * @see ./save.js
	  */
	 save,
 } );
 