import Box2 from "./box2.components.jsx";

const Box = ({ backgroundColor }) => {
	return (
		<div style={{ background: backgroundColor }} className="main-box">
			<Box2 backgroundColor="red" />
		</div>
	);
};
export default Box;
