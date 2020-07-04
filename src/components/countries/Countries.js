import React from 'react';
import './countries.css'
import countryCard from '../../views/countryCard/countryCard';
import CONFIG from '../../Config';
class Countries extends React.Component {
	constructor() {
		super();
		this.state = {
			"allCountries" : [],
			"visibleCountries" : [],
			"countriesVisibleOnLoad": 6,
			"countryListError" : false,
			"counter" : 0,
		}
		this._initCountries(this);
		this._loadMoreCountries(this);
	}
	_initCountries(context){
		fetch(CONFIG.api).then((resp) => resp.json()).then(function(data) {
			context.setState((state) => ({
				allCountries: data,
				visibleCountries: data.slice(0,state.countriesVisibleOnLoad)
			}));
			
		})
		.catch(function(error){
			console.error(error);
			context.setState((state) => ({countryListError: true}));
		})
	}
	 _loadMoreCountries(state) {
		// context.setState((state)=>({
		// 	visibleCountries: [...state.allCountries]
		// }));
		// console.log("clicked");
		console.log("Ashfaque");
	}
	render(){
		// console.log(this.state.allCountries[0]);
		return (
			<section className="countries">
				<div className="countryList">
				{this.state.visibleCountries.map((country,index) => {
					return <React.Fragment key ={index}>
						{countryCard({
						imgSrc:country.flag,
			        	name: country.name,
			        	population : country.population,
			        	buttonText : "View",
			        	callback : null
					})}
					</React.Fragment>
					 
				})}
				</div>
				<button className="button loadMoreButton" onClick={this._loadMoreCountries}>Load More!</button>
			</section>
		)
	}
}

export default Countries;