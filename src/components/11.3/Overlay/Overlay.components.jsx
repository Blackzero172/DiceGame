import "./Overlay.styles.css";
const Overlay = ({ firstName, lastName, age, message }) => {
	const confirmSubmit = () => {
		document.querySelector(".overlay").innerText = "Thank you for filling our form";
	};
	const cancelSubmit = () => {
		document.querySelector(".overlay-container").classList.add("display-none");
	};
	return (
		<div className="overlay-container display-none">
			<div className="overlay">
				<h3>Are you sure you want to submit your information</h3>
				<p className="first">First Name: {firstName}</p>
				<p className="last">Last Name: {lastName}</p>
				<p className="age">Age Range: {age}</p>
				<p className="message">Your Message: {message}</p>
				<div className="button-container">
					<button type="button" className="confirm-btn" onClick={confirmSubmit}>
						Yes I'm Sure
					</button>
					<button type="button" className="cancel-btn" onClick={cancelSubmit}>
						No I'm Not
					</button>
				</div>
			</div>
		</div>
	);
};
export default Overlay;
