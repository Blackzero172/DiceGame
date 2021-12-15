import React from "react";
class Textarea extends React.Component {
	render() {
		return (
			<div>
				<label>Message</label>
				<textarea
					name="text-area"
					id="text-area"
					cols="30"
					rows="10"
					style={{ resize: "none" }}
					onChange={(e) => {
						this.props.onChange(e, "message");
					}}
					value={this.props.message}
				></textarea>
			</div>
		);
	}
}
export default Textarea;
