import React from 'react';
import './countries.css'
import countryCard from '../../views/countryCard/countryCard';
import CONFIG from '../../Config';
class Countries extends React.Component {
	constructor() {
		super();
		this.state = {
			"allCountries" : [],
			"countryListError" : false
		}
		this._initCountries(this);
	}
	_initCountries(context){
		fetch(CONFIG.api).then((resp) => resp.json()).then(function(data) {
			context.setState((state) => ({allCountries: data}));
		})
		.catch(function(error){
			console.error(error);
			context.setState((state) => ({countryListError: true}));
		})
	}
	render(){
		console.log(this.state.allCountries[0]);
		return (
			<section className="countries">
				{this.state.allCountries.map((country,index) => {
					return countryCard({
						imgSrc:country.flag,
			        	name: country.name,
			        	population : country.population,
			        	buttonText : "View",
			        	callback : null
					})
				})}
			</section>
		)
	}
}

export default Countries;