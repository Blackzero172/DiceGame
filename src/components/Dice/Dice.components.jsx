import React from "react";
import "./Dice.styles.css";
import rollingSound from "../../audio/Dice-Roll.mp3";
class Dice extends React.Component {
	rollingSound = new Audio(rollingSound);
	state = { dice1: 0, dice2: 0, diceSum: 0, diceCount: 0, canThrow: true };
	RollDice = () => {
		if (this.state.canThrow && !this.props.gameOver) {
			document.querySelector(".throw-btn").classList.add("cooldown");
			this.setState({ canThrow: false });
			this.rollingSound.play();
			const dice1 = Math.floor(Math.random() * 6) + 1;
			const dice2 = Math.floor(Math.random() * 6) + 1;
			if (dice1 === 6 && dice2 === 6) {
				this.setState({ dice1: dice1, dice2: dice2, diceSum: 0 }, this.AssignDice);
			} else {
				this.setState({ dice1: dice1, dice2: dice2, diceSum: dice1 + dice2 }, this.AssignDice);
			}
			setTimeout(() => {
				this.setState({ canThrow: true });
				document.querySelector(".throw-btn").classList.remove("cooldown");
			}, 1450);
		}
	};
	AssignDice = () => {
		const dice1 = document.querySelector("#dice1");
		const dice2 = document.querySelector("#dice2");
		dice1.classList.remove("animation-container");
		void dice1.offsetWidth;
		dice1.className = `number${this.state.dice1} animation-container`;
		dice2.classList.remove("animation-container");
		void dice2.offsetWidth;
		dice2.className = `number${this.state.dice2} animation-container`;
		this.props.onChange(this.state.diceSum);
	};
	render() {
		return (
			<div className="dice-container">
				<div className="container">
					<div id="dice1"></div>
					<div id="dice2"></div>
				</div>
				<button type="button" onClick={this.RollDice} className="throw-btn">
					<i className="fas fa-dice"></i> Throw
				</button>
				<button type="button" onClick={this.props.onClick} className="hold-btn">
					<i className="fas fa-hand-holding"></i> Hold
				</button>
			</div>
		);
	}
}
export default Dice;
