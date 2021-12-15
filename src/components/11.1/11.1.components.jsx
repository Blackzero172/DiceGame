import React from "react";
import Button from "./CustomButton.components";
class Exercise extends React.Component {
	state = { selectedColor: "" };
	onButtonClick = (e) => {
		this.setState({ selectedColor: e.target.style.backgroundColor });
	};
	colors = ["aqua", "crimson", "purple", "skyblue"];
	render() {
		return (
			<div>
				{this.colors.map((color) => {
					return <Button color={color} onClick={this.onButtonClick} />;
				})}
				<h3>
					The Selected Color is :{" "}
					<em style={{ color: this.state.selectedColor }}>{this.state.selectedColor}</em>
				</h3>
			</div>
		);
	}
}
export default Exercise;
