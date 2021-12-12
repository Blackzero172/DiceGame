import Box4 from "./box4.components.jsx";
const Box = ({ backgroundColor }) => {
	return (
		<div style={{ background: backgroundColor }}>
			<Box4 backgroundColor="purple" />
			<Box4 backgroundColor="purple" />
		</div>
	);
};
export default Box;
