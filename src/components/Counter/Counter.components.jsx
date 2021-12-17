import React from "react";
import "./Counter.styles.css";
class Counter extends React.Component {
	render() {
		const { playerNumber, isTemp } = this.props;
		const counterClass = isTemp ? `temp-counter-${playerNumber}` : `counter-${playerNumber}`;
		const counterText = isTemp ? `Temp Score:` : `Total Score:`;
		return (
			<div className={counterClass}>
				<h3>
					{counterText} {this.props.score}
				</h3>
			</div>
		);
	}
}
export default Counter;
