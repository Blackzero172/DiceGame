import React from "react";
class Input extends React.Component {
	render() {
		return (
			<div>
				<label>{this.props.label}</label>
				<input
					onChange={(e) => {
						this.props.onChange(e, Object.keys(this.props)[1]);
					}}
					value={this.props.value}
				></input>
			</div>
		);
	}
}
export default Input;
