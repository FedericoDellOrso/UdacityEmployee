import { connect } from "react-redux";
import CardQuestions from "./CardQuestions";

const Home = (props) => {
  console.log(props.completedQuestion);
  return (
    <div>
      <h1 data-testid="newquestion">New Questions</h1>
      <hr></hr>
      <CardQuestions questions={props.toDoQuestion} />
      <h1>Done</h1>
      <hr></hr>
      <CardQuestions questions={props.completedQuestion} />
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  const doneQuestionsByUser = Object.keys(users[authedUser].answers);
  const completedQuestion = Object.values(questions)
    .filter((question) => doneQuestionsByUser.includes(question.id))
    .sort((a, b) => b.timestamp > a.timestamp);
  const toDoQuestion = Object.values(questions)
    .filter((question) => !doneQuestionsByUser.includes(question.id))
    .sort((a, b) => b.timestamp > a.timestamp);
  return { completedQuestion, toDoQuestion };
};

export default connect(mapStateToProps)(Home);
