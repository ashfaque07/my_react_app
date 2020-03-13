import React from 'react';
import countryCardCss from './countryCard.css'
import button from '../../styles/general.css';

function countryCard (props){

	return (
		<div className= "country-card">
			<img src={props.imgSrc} alt="country-Flag"></img>
			<h4>{props.name}</h4>
			<p>{props.population}</p>
			<button onClick={props.callback} className="button button--primary">{props.buttonText}</button>
		</div>
	)
}

export default countryCard