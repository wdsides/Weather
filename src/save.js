import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
	return (
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
	);
}
