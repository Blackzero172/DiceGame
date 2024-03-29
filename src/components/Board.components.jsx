import React from "react";
import Player from "./Player/Player.components";
import Dice from "./Dice/Dice.components";
import BackgroundMusic from "../audio/BGMusic.mp3";
import "./Board.styles.css";
class Board extends React.Component {
	componentDidMount() {
		this.ChangeActivePlayer();
		const BGMusic = new Audio(BackgroundMusic);
		BGMusic.volume = 0.25;
		document.body.addEventListener("click", () => {
			BGMusic.play();
		});
		BGMusic.addEventListener("ended", () => {
			BGMusic.play();
		});
		document.querySelector("#volume").addEventListener("input", (e) => {
			BGMusic.volume = e.target.value / 100;
		});
	}

	state = { p1Score: 0, p2Score: 0, p1Temp: 0, p2Temp: 0, playerTurn: 1, pointsToWin: 100, gameOver: false };
	OnScoreChange = (sum) => {
		const currentPlayer = `p${this.state.playerTurn}`;
		sum === 0
			? this.setState({ [`${currentPlayer}Temp`]: 0 }, this.HoldScore)
			: this.setState({ [`${currentPlayer}Temp`]: this.state[`${currentPlayer}Temp`] + sum });
	};
	HoldScore = () => {
		const { playerTurn } = this.state;
		const currentPlayer = `p${playerTurn}`;
		const sum = this.state[`${currentPlayer}Temp`] + this.state[`${currentPlayer}Score`];
		this.setState(
			{
				[`${currentPlayer}Score`]: sum,
				playerTurn: playerTurn === 1 ? 2 : 1,
				[`${currentPlayer}Temp`]: 0,
			},
			this.CheckScore
		);
	};
	ChangeActivePlayer = () => {
		const activePlayer = document.querySelector(`.player-${this.state.playerTurn}`);
		const passivePlayer = document.querySelector(`.player-${this.state.playerTurn === 1 ? 2 : 1}`);
		activePlayer.classList.add("active-turn");
		passivePlayer.classList.remove("active-turn");
	};
	CheckScore = () => {
		if (this.state.p1Score >= this.state.pointsToWin) {
			const player = document.querySelector(".player-1");
			player.querySelector(".player-container").classList.add("display-none");
			player.querySelector(".winner-container").classList.remove("winner-animation");
			this.setState({ gameOver: true });
		} else if (this.state.p2Score >= this.state.pointsToWin) {
			const player = document.querySelector(".player-2");
			player.querySelector(".player-container").classList.add("display-none");
			player.querySelector(".winner-container").classList.remove("winner-animation");
			this.setState({ gameOver: true });
		} else {
			this.ChangeActivePlayer();
		}
	};
	ResetGame = () => {
		this.setState({ p1Score: 0, p2Score: 0, p1Temp: 0, p2Temp: 0, playerTurn: 1 }, this.ChangeActivePlayer);
		document.querySelector(".landing-page").classList.remove("z-position", "opacity-hidden");
		document.querySelectorAll(".player-container").forEach((player) => {
			player.classList.remove("display-none");
		});
		document.querySelectorAll(".winner-container").forEach((player) => {
			player.classList.add("winner-animation");
		});
		this.setState({ gameOver: false });
	};
	ChangeThreshold = () => {
		const input = document.querySelector(".input-threshold");
		if (+input.value >= 20 && +input.value <= 200) {
			this.setState({ pointsToWin: +input.value });
			document.querySelector(".landing-page").classList.add("opacity-hidden");
			setTimeout(() => {
				document.querySelector(".landing-page").classList.add("z-position");
			}, 750);
		} else {
			this.CallPopup("Please insert a number between 20 and 200");
		}
	};
	CallPopup(message) {
		const popup = document.querySelector(".popup-message");
		popup.innerText = message;
		popup.classList.remove("transform-y", "opacity-hidden");
		setTimeout(() => {
			popup.classList.add("transform-y", "opacity-hidden");
		}, 2500);
	}

	render() {
		const { p1Score, p2Score, p1Temp, p2Temp } = this.state;

		return (
			<div className="parent-container">
				<div className="popup-message opacity-hidden transform-y"></div>
				<div className="game-container">
					<Player playerNumber={1} tempScore={p1Temp} globalScore={p1Score} />

					<div className="settings-container">
						<div className="volume-container">
							<h3 className="volume-text">Music Volume</h3>
							<input type="range" name="volume" id="volume" defaultValue={25} min={0} max={100} />
						</div>
						<button type="button" onClick={this.ResetGame}>
							<i className="fas fa-undo"></i> Reset Game
						</button>
						<Dice onChange={this.OnScoreChange} onClick={this.HoldScore} gameOver={this.state.gameOver} />
					</div>
					<Player playerNumber={2} tempScore={p2Temp} globalScore={p2Score} />
				</div>
				<div className="landing-page">
					<h3>Please Input a number between 20 and 200</h3>
					<input
						type="number"
						placeholder="Type in the threshold for winning..."
						className="input-threshold"
						onKeyPress={(e) => {
							if (e.key === "Enter") this.ChangeThreshold();
						}}
					/>
					<button type="button" onClick={this.ChangeThreshold} className="confirm-btn">
						Confirm
					</button>
				</div>
			</div>
		);
	}
}
export default Board;
