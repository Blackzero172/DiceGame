import React from "react";
import Checkbox from "./CustomCheckbox.components";
class Exercise extends React.Component {
	render() {
		return (
			<div>
				<Checkbox />
				<Checkbox text="I agree to the privacy policy" />
				<Checkbox text="I give this website permission to view my data" checkState={true} />
				<Checkbox text="I consent to the NDA Contract" checkState={true} />
			</div>
		);
	}
}
export default Exercise;
