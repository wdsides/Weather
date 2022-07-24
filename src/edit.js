import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Placeholder } from '@wordpress/components';
import './editor.scss';
import { useEntityProp } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';

export default function Edit( { attributes, isSelected, setAttributes } ) {
    function updateDayconditions( e ){
        setAttributes( {
            dayconditions: e.target.value
        } );
    }
    function updateHightemp( e ){
        setAttributes( {
            hightemp: e.target.value
        } );
    }
	function updateNightconditions( e ){
        setAttributes( {
            nightconditions: e.target.value
        } );
    }
    function updateLowtemp( e ){
        setAttributes( {
            lowtemp: e.target.value
        } );
    }
    function updateWindspeed( e ){
        setAttributes( {
            windspeed: e.target.value
        } );
    }
    function updateWinddir( e ){
        setAttributes( {
            winddir: e.target.value
        } );
    }
    function updateHumidity( e ){
        setAttributes( {
            humidity: e.target.value
        } );
    }
    function updateRaininches( e ){
        setAttributes( {
            raininches: e.target.value
        } );
    }
    function updateSnowinches( e ){
        setAttributes( {
            snowinches: e.target.value
        } );
    }

	function getDOMContent(){
		return(
			<div { ...useBlockProps.save() }>
			{ attributes.dayconditions || attributes.hightemp || 
			  attributes.nightconditions || attributes.lowtemp ?
			(
				<span class="weather-block-condition">
				{ attributes.dayconditions ? 
				(
					<i class={ "weather-block-primary-icon wi wi-"+attributes.dayconditions }></i>
				) : (null)
				}
				{ attributes.hightemp ? 
				(
					<span>{ attributes.hightemp }
					<i class="weather-block-temp-unit wi wi-fahrenheit"></i>
					</span>
				) : (null)
				}
				{ (attributes.hightemp || attributes.dayconditions) && (attributes.lowtemp || attributes.nightconditions) ? 
				(
					<span class="weather-block-divider">/</span>
				) : (null)
				}
				{ attributes.nightconditions ? 
				(
					<i class={ "weather-block-primary-icon wi wi-"+attributes.nightconditions }></i>
				) : (null)
				}
				{ attributes.lowtemp ? 
				(
					<span>{ attributes.lowtemp }
					<i class="weather-block-temp-unit wi wi-fahrenheit"></i>
					</span>
				) : (null)
				}
					</span>
				) : (null)
			}
			{ attributes.windspeed || attributes.winddir ?
			(
				<span class="weather-block-condition">
					<i class="weather-block-primary-icon wi wi-strong-wind"></i>
					{ attributes.windspeed ? 
					(
						<span class="weather-block-windspeed">
							{ attributes.windspeed }<span class="weather-block-unit-label">mph</span>
						</span>
					) : (null)
					}
					{ attributes.winddir ? 
					(
						<span class="weather-block-winddir">
							<i class={ "weather-block-primary-icon wi wi-wind wi-"+attributes.winddir }></i>
						</span>
					) : (null)
					}
				</span>
			) : (null)
			}
			{ attributes.humidity ? 
			(
				<span class="weather-block-condition"><i class="weather-block-primary-icon wi wi-humidity"></i>
				{ attributes.humidity }<span class="weather-block-unit-label">%</span>
				</span>
			) : (null)
			}
			{ attributes.raininches ? 
			(
				<span class="weather-block-condition"><i class="weather-block-primary-icon wi wi-raindrop"></i>
				{ attributes.raininches }<span class="weather-block-inches-label">"</span>
				</span>
			) : (null)
			}
			{ attributes.snowinches ? 
			(
				<span class="weather-block-condition"><i class="weather-block-primary-icon wi wi-snowflake-cold"></i>
				{ attributes.snowinches }<span class="weather-block-inches-label">"</span>
				</span>
			) : (null)
			}
		</div>
		)
	}

	function getStringContent(){
		var s = '<div class="wp-block-willsides-weather">'
		if (attributes.dayconditions || attributes.hightemp || attributes.nightconditions || attributes.lowtemp) {
			s += `<span class="weather-block-condition">` }
		if (attributes.dayconditions) {
			s += `<i class="weather-block-primary-icon wi wi-${attributes.dayconditions}"></i>` }
		if (attributes.hightemp) {
			s += `<span>${ attributes.hightemp }<i class="weather-block-temp-unit wi wi-fahrenheit"></i></span>` }
		if ((attributes.hightemp || attributes.dayconditions) && (attributes.lowtemp || attributes.nightconditions)) {
			s += `<span class="weather-block-divider">/</span>` }
		if (attributes.nightconditions) {
			s += `<i class="weather-block-primary-icon wi wi-${attributes.nightconditions}"></i>` }
		if (attributes.lowtemp) {
			s += `<span>${ attributes.lowtemp }<i class="weather-block-temp-unit wi wi-fahrenheit"></i></span>` } 
		if (attributes.dayconditions || attributes.hightemp || attributes.nightconditions || attributes.lowtemp) {
			s += `</span>` }
		if (attributes.windspeed || attributes.winddir) {
			s += `<span class="weather-block-condition"><i class="weather-block-primary-icon wi wi-strong-wind"></i>` }
		if (attributes.windspeed) {
			s += `<span class="weather-block-windspeed">${attributes.windspeed}<span class="weather-block-unit-label">mph</span></span>` }
		if (attributes.winddir) {
			s += `<span class="weather-block-winddir"><i class="weather-block-primary-icon wi wi-wind wi-${attributes.winddir}"></i></span>` }
		if (attributes.windspeed || attributes.winddir) {
			s += `</span>` }
		if (attributes.humidity) {
			s += `<span class="weather-block-condition"><i class="weather-block-primary-icon wi wi-humidity"></i>${attributes.humidity}<span class="weather-block-unit-label">%</span></span>` }
		if (attributes.raininches) {
			s += `<span class="weather-block-condition"><i class="weather-block-primary-icon wi wi-raindrop"></i>${attributes.raininches}<span class="weather-block-inches-label">"</span></span>` }
		if (attributes.snowinches) {
			s += `<span class="weather-block-condition"><i class="weather-block-primary-icon wi wi-snowflake-cold"></i>${attributes.snowinches}<span class="weather-block-inches-label">"</span></span>` }
		s += `</div>`

		return s;
	}

	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);
	const [ meta, setMeta ] = useEntityProp( 'postType', postType, 'meta' );
	function updateLeftHeaderMeta(){
		setMeta( { ...meta, header_meta_left: getStringContent() } );
		const button = document.querySelector('.add-to-meta-buttons input[value="Left"]')
		const tempText = document.createElement('input');
		tempText.setAttribute("type", "button");
		tempText.setAttribute("value", "done!");
		tempText.classList.add('meta-submitted-confirmation');
		button.parentNode.replaceChild(tempText, button);
		button.classList.add("fade-back-in");
		setTimeout(function(){tempText.parentNode.replaceChild(button, tempText);}, 3000);
	}
	function updateCenterHeaderMeta(){
		setMeta( { ...meta, header_meta_center: getStringContent() } );
		const button = document.querySelector('.add-to-meta-buttons input[value="Center"]')
		const tempText = document.createElement('input');
		tempText.setAttribute("type", "button");
		tempText.setAttribute("value", "done!");
		tempText.classList.add('meta-submitted-confirmation');
		button.parentNode.replaceChild(tempText, button);
		button.classList.add("fade-back-in");
		setTimeout(function(){tempText.parentNode.replaceChild(button, tempText);}, 3000);
	}	
	function updateRightHeaderMeta(){
		setMeta( { ...meta, header_meta_right: getStringContent() } );
		const button = document.querySelector('.add-to-meta-buttons input[value="Right"]')
		const tempText = document.createElement('input');
		tempText.setAttribute("type", "button");
		tempText.setAttribute("value", "done!");
		tempText.classList.add('meta-submitted-confirmation');
		button.parentNode.replaceChild(tempText, button);
		button.classList.add("fade-back-in");
		setTimeout(function(){tempText.parentNode.replaceChild(button, tempText);}, 3000);
	}

	return (
		<div { ...useBlockProps() }>
            { (attributes.dayconditions || attributes.nightconditions || attributes.hightemp ||
			   attributes.lowtemp || attributes.windspeed || attributes.winddir ||
			   attributes.humidity || attributes.raininches || attributes.snowinches ) && ! isSelected ? (
                getDOMContent()
            ) : (
                <Placeholder
                    label="Weather Block"
                    instructions="Enter at least one value"
                >
				<div class="weather-block-input-form">
					<span class="weather-input-field-label"><label for="dayconditions">Day conditions: </label></span>
					<select name="dayconditions" onChange={ updateDayconditions } value={ attributes.dayconditions }>	
						<option value=""></option>
						<option value="day-sunny">sunny</option>
						<option value="day-cloudy">partly cloudy</option>
						<option value="cloudy">cloudy</option>
						<option value="showers">raining</option>
						<option value="day-showers">sun and rain</option>
						<option value="snow">snowing</option>
						<option value="thunderstorm">thunderstorm</option>
						<option value="sleet">sleet</option>
						<option value="hail">hail</option>
						<option value="day-haze">hazy</option>
						<option value="smoke">smoke</option>
						<option value="fog">fog</option>
					</select>
					<input name="hightemperature" type="text" onChange={ updateHightemp } value={ attributes.hightemp } placeholder="0" />
					<span class="weather-input-field-units">&deg;F</span><br />
					<span class="weather-input-field-label"><label for="nightconditions">Night conditions: </label></span>
					<select name="nightconditions" onChange={ updateNightconditions } value={ attributes.nightconditions }>	
						<option value=""></option>
						<option value="night-clear">clear</option>
						<option value="night-alt-cloudy">partly cloudy</option>
						<option value="cloudy">cloudy</option>
						<option value="night-alt-showers">raining</option>
						<option value="night-alt-snow">snowing</option>
						<option value="night-alt-storm-showers">thunderstorm</option>
						<option value="night-alt-sleet">sleet</option>
						<option value="night-alt-hail">hail</option>
					</select>
					<input name="lowtemperature" type="text" onChange={ updateLowtemp } value={ attributes.lowtemp } placeholder="0" />
					<span class="weather-input-field-units">&deg;F</span><br />
					<span class="weather-input-field-label"><label for="windspeed">Windspeed: </label></span>
					<input name="windspeed" type="text" onChange={ updateWindspeed } value={ attributes.windspeed } placeholder="0" />
					<span class="weather-input-field-units">mph</span><br />
					<span class="weather-input-field-label"><label for="winddir">Wind direction: </label></span>
					<select name="winddir" onChange={ updateWinddir } value={ attributes.winddir }>
						<option value=""></option>
						<option value="from-n">N</option>
						<option value="from-nne">NNE</option>
						<option value="from-ne">NE</option>
						<option value="from-ene">ENE</option>
						<option value="from-e">E</option>
						<option value="from-ese">ESE</option>
						<option value="from-se">SE</option>
						<option value="from-sse">SSE</option>
						<option value="from-s">S</option>
						<option value="from-ssw">SSW</option>
						<option value="from-sw">SW</option>
						<option value="from-wsw">WSW</option>
						<option value="from-w">W</option>
						<option value="from-wnw">WNW</option>
						<option value="from-nw">NW</option>
						<option value="from-nnw">NNW</option>
					</select><br />
					<span class="weather-input-field-label"><label for="humidity">Humidity: </label></span>
					<input name="humidity" type="text" onChange={ updateHumidity } value={ attributes.humidity } placeholder="0" />
					<span class="weather-input-field-units">%</span><br />
					<span class="weather-input-field-label"><label for="raininches">Rainfall: </label></span>
					<input name="raininches" type="text" onChange={ updateRaininches } value={ attributes.raininches } placeholder="0.0" />
					<span class="weather-input-field-units">"</span><br />
					<span class="weather-input-field-label"><label for="snowinches">Snowfall: </label></span>
					<input name="snowinches" type="text" onChange={ updateSnowinches } value={ attributes.snowinches } placeholder="0.0" />
					<span class="weather-input-field-units">"</span><br />
					<div class="add-to-meta-section">
                    <div class="add-to-meta-instructions">Insert into the post header metadata section:</div>
                    <div class="add-to-meta-buttons">
                    <input type="button" value="Left" onClick={ updateLeftHeaderMeta } />
                    <input type="button" value="Center" onClick={ updateCenterHeaderMeta } />
                    <input type="button" value="Right" onClick={ updateRightHeaderMeta } />
                    </div>
                </div>
				</div>
				</Placeholder>
			) }
		</div>
	);
}
