import React from "react";
class Exer7_1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = { number: 0 };
		console.log(this);
	}
	Increment() {
		this.setState({ number: this.state.number + 1 });
	}
	Decrement() {
		if (this.state.number > 0) this.setState({ number: this.state.number - 1 });
	}
	render() {
		return (
			<div>
				<h3>Current Value:{this.state.number}</h3>
				<button type="button" onClick={this.Increment.bind(this)}>
					Increment
				</button>
				<button type="button" onClick={this.Decrement.bind(this)}>
					Decrement
				</button>
			</div>
		);
	}
}
export default Exer7_1;
