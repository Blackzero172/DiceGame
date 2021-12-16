import React from "react";
import Player from "./Player/Player.components";
import Dice from "./Dice/Dice.components";
import "./Board.styles.css";
class Board extends React.Component {
	state = { p1Score: 0, p2Score: 0, p1Temp: 0, p2Temp: 0, playerTurn: 1 };
	OnScoreChange = (sum) => {
		if (this.state.playerTurn === 1) {
			if (sum === 0) {
				this.setState({ p1Temp: 0 }, this.HoldScore);
			} else {
				console.log("reset2");
				this.setState({ p1Temp: this.state.p1Temp + sum });
			}
		}
		if (this.state.playerTurn === 2) {
			if (sum === 0) {
				this.setState({ p2Temp: 0 }, this.HoldScore);
			} else {
				this.setState({ p2Temp: this.state.p2Temp + sum });
			}
		}
	};
	HoldScore = () => {
		if (this.state.playerTurn === 1) {
			this.setState({ p1Score: this.state.p1Score + this.state.p1Temp, playerTurn: 2, p1Temp: 0 });
		}
		if (this.state.playerTurn === 2) {
			this.setState({ p2Score: this.state.p2Score + this.state.p2Temp, playerTurn: 1, p2Temp: 0 });
		}
	};
	render() {
		const { p1Score, p2Score, p1Temp, p2Temp } = this.state;
		return (
			<div>
				<Player playerNumber={1} tempScore={p1Temp} globalScore={p1Score} />
				<Player playerNumber={2} tempScore={p2Temp} globalScore={p2Score} />
				<Dice onChange={this.OnScoreChange} />
				<button type="button" onClick={this.HoldScore}>
					Hold
				</button>
			</div>
		);
	}
}
export default Board;
