import QuizTitle from "./QuizTitle.components";
import Question from "./Question.components";
const Quiz = ({ title, q1, q2, q1Type, q2Type, q1Value, q2Value }) => {
	return (
		<div>
			<QuizTitle text={title} />
			<Question title={q1} inputType={q1Type} inputValue={q1Value} />
			<Question title={q2} inputType={q2Type} inputValue={q2Value} />
		</div>
	);
};
export default Quiz;
