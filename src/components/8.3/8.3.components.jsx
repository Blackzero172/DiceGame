import React from "react";
class Exercise extends React.Component {
	state = { count: 0 };
	render() {
		return <div style={{ width: "100px", height: "100px", margin: "1rem" }} className="container"></div>;
	}
	componentDidMount() {
		const colors = ["red", "green", "blue", "yellow", "orange", "purple", "black", "gray", "aqua"];
		const timerID = setInterval(() => {
			document.querySelector(".container").style.backgroundColor = colors[this.state.count];
			this.setState({ count: this.state.count + 1 });
			if (this.state.count > 5) {
				document.querySelector(".container").style.borderRadius = "50%";
			}
			if (this.state.count === colors.length) clearInterval(timerID);
		}, 500);
	}
}
export default Exercise;
