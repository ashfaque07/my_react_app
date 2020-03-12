import React from 'react';

class ClickCounter extends React.Component {

	constructor(){
		super();
		this.state = {
			"counter" : 0
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		this.setState((state) => {
			return {counter: state.counter+1}
		});
	}
	render(){
		return (
			<div>
				<button onClick={this.handleClick}>Click Me</button>
				<p>Counter : {this.state.counter}</p>
			</div>
		)
	}
}

export default ClickCounter;