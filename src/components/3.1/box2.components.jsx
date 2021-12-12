import Box3 from "./box3.components.jsx";

const Box = ({ backgroundColor }) => {
	return (
		<div style={{ background: backgroundColor }}>
			<Box3 backgroundColor="blue" />
		</div>
	);
};
export default Box;
