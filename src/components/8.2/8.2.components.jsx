import React from "react";
import Box from "./Box.components";
import "./8.2.styles.css";
class Exer8_2 extends React.Component {
	render() {
		return (
			<div>
				<Box></Box>
				<Box></Box>
				<Box></Box>
			</div>
		);
	}
	componentDidMount() {
		setTimeout(() => {
			document.querySelectorAll(".box").forEach((box) => {
				box.classList.add("slide-animation");
			});
		}, 1000);
		setTimeout(() => {
			document.querySelectorAll(".box").forEach((box) => {
				box.remove();
			});
		}, 3000);
	}
}
export default Exer8_2;
