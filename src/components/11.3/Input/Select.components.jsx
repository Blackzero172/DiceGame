import React from "react";
class Select extends React.Component {
	render() {
		return (
			<select
				name="select"
				id="select"
				onChange={(e) => {
					this.props.onChange(e, "age");
				}}
				value={this.props.age}
			>
				<option value="0-15">Age 0-15</option>
				<option value="16-21">Age 16-21</option>
				<option value="22-30">Age 22-30</option>
				<option value="30-45">Age 30-45</option>
				<option value="45+">Age 45+</option>
			</select>
		);
	}
}
export default Select;
