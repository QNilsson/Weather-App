import React from 'react';

const Weather = (props) => {
	return (
		<div className="container">
			<div className="cards pt-4">
				<h1>{props.dt}</h1>
				<h5 className="py-4">
					<i className={`wi ${props.weatherIcon} display-1`} />
				</h5>
        <h2 className="py-3">{props.city}</h2>

				<div class="temp">
					
					{props.temp_cel ? (
						<h3 className="py-2">{props.temp_cel}&deg; celsius</h3>
					) : null}
					{props.temp_far ? (
						<h3 className="py-2">{props.temp_far}&deg; fahrenheit</h3>
					) : null}
				</div>

				{/* {minmaxTemp(props.temp_min, props.temp_max)} */}
			
				<h4 className="py-3">{props.mainW}</h4>
				<h4 className="py-3">{props.description}</h4>
				{/* <h4 className="py-3">{props.visibility}</h4> */}
			</div>
		</div>
	);
};

function minmaxTemp(min, max) {
	if (min && max) {
		return (
			<h3>
				{/* <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span> */}
			</h3>
		);
	}
}

export default Weather;
