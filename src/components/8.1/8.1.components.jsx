import React from "react";
class Exer8_1 extends React.Component {
	state = { favoriteColor: "black" };
	componentDidMount() {
		setTimeout(() => {
			this.setState({ favoriteColor: "red" });
		}, 1000);
	}
	componentDidUpdate() {
		document.querySelector(
			"#container"
		).innerHTML = `<h1>The updated favorite color is ${this.state.favoriteColor}</h1>`;
	}
	render() {
		return (
			<div>
				<h1>My favorite color is {this.state.favoriteColor}</h1>
				<div id="container"></div>
			</div>
		);
	}
}
export default Exer8_1;
