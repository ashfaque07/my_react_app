import React from 'react';
import './countryCard.css';
import '../../styles/general.css';

function countryCard (props){

	return (
		<div className= "country-card">
			<img src={props.imgSrc} alt="country-Flag"></img>
			<h4>{props.name}</h4>
			<p>Current Population : {props.population}</p>
			<button className="button button--primary">{props.buttonText}</button>
		</div>
	)
}

export default countryCard