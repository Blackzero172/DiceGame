import React from "react";
import "./Spinner.styles.css";
class Spinner extends React.Component {
	getRandomSpinner() {
		const spinners = [
			'<div class="full_circle"></div>',
			'<div class="ghost_circle"></div>',
			`
            <div class="color-dots">
                <div class="dot-1"></div>
                <div class="dot-2"></div>
                <div class="dot-3"></div>
            </div>
            `,
		];
		const spinner = spinners[Math.floor(Math.random() * spinners.length)];
		document.querySelector(".spinner").innerHTML = spinner;
	}
	render() {
		return <div className="spinner"></div>;
	}
	componentDidMount() {
		this.getRandomSpinner();
	}
}
export default Spinner;
