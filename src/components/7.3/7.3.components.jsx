import React from "react";
class Exer7_1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = { number: 0 };
	}
	async Increment() {
		if (this.state.number < 10) {
			await this.setState({ number: this.state.number + 1 });
			const label = document.querySelector("h3");
			const num = this.state.number;
			if (num > 0) {
				label.style.color = "green";
			} else if (num === 0) {
				label.style.color = "black";
			}
		}
	}
	async Decrement() {
		if (this.state.number > -10) {
			await this.setState({ number: this.state.number - 1 });
			const label = document.querySelector("h3");
			const num = this.state.number;
			if (num < 0) {
				label.style.color = "red";
			} else if (num === 0) {
				label.style.color = "black";
			}
		}
	}
	render() {
		return (
			<div>
				<h3>Current Value: {this.state.number}</h3>
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
