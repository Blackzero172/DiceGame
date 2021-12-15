import React from "react";
import Input from "../Input/Input.components";
import Select from "../Input/Select.components";
import Textarea from "../Textarea/Textarea.components";
import Overlay from "../Overlay/Overlay.components";
import "./Form.styles.css";
class Form extends React.Component {
	state = { firstName: "", lastName: "", age: "0-15", message: "" };
	onFormSubmit = (e) => {
		e.preventDefault();
		document.querySelector(".overlay-container").classList.remove("display-none");
	};
	onInputChange = (e, varName) => {
		this.setState({ [varName]: e.target.value });
	};
	render() {
		const { firstName, lastName, age, message } = this.state;
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<Input label="First Name" firstName={firstName} onChange={this.onInputChange} />
					<Input label="Last Name" lastName={lastName} onChange={this.onInputChange} />
					<Select age={age} onChange={this.onInputChange} />
					<Textarea message={message} onChange={this.onInputChange} />
					<button>Submit</button>
				</form>
				<Overlay firstName={firstName} lastName={lastName} age={age} message={message} />
			</div>
		);
	}
}
export default Form;
