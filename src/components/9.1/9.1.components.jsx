import React from "react";
import Spinner from "./Spinner.components";
import "./9.1.styles.css";
class Exercise extends React.Component {
	componentDidMount() {
		const randomTime = Math.floor(Math.random() * 5000);
		console.log(randomTime);

		setTimeout(() => {
			document.querySelector(".spinner").remove();
			document.querySelector(".container").innerHTML = "<h1>Done!!</h1>";
		}, randomTime);
	}
	render() {
		return (
			<div className="container">
				<Spinner />
			</div>
		);
	}
}
export default Exercise;
