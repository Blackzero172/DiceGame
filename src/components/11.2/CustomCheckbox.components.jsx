import React from "react";
class Checkbox extends React.Component {
	state = { checkState: this.props.checkState };
	render() {
		return (
			<div>
				<input
					type="checkbox"
					checked={this.state.checkState}
					onChange={(e) => this.setState({ checkState: e.target.checked })}
				/>
				<p style={{ display: "inline-block" }}> {this.props.text}</p>
			</div>
		);
	}
}
Checkbox.defaultProps = { text: "I agree to the terms of service", checkState: false };
export default Checkbox;
