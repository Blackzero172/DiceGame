import React from "react";
class Box extends React.Component {
	render() {
		const { width, height } = this.props;
		return <div style={{ height: height, width: width }} className="box"></div>;
	}
}
Box.defaultProps = {
	width: "100px",
	height: "100px",
};
export default Box;
