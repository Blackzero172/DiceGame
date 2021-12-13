import React from "react";
import "./7.2.styles.css";
class Exer7_2 extends React.Component {
	constructor(props) {
		super(props);
	}
	ShowOrHide() {
		const box = document.querySelector(".box");
		box.classList.toggle("display-none");
	}
	render() {
		return (
			<div>
				<button type="button" onClick={this.ShowOrHide}>
					Show/Hide
				</button>
				<div style={{ width: "100px", height: "100px", backgroundColor: "red" }} className="box"></div>
			</div>
		);
	}
}
export default Exer7_2;
