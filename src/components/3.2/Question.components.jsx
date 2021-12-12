import QTitle from "./QTitle.components";
import QInput from "./QInput.components";
const Question = ({ title, inputType, inputValue }) => {
	return (
		<div>
			<QTitle text={title} />
			<QInput type={inputType} value={inputValue} />
		</div>
	);
};
export default Question;
