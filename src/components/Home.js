import { connect } from "react-redux";
import CardQuestions from "./CardQuestions";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";

const Home = (props) => {
  console.log(props.completedQuestion);
  return (
    <div>
      <Container>
        <Tabs
          defaultActiveKey="unanswered"
          id="questionsTabs"
          className="mb-3"
          data-testid="newquestion"
        >
          <Tab eventKey="unanswered" title="Unanswered Question">
            <CardQuestions questions={props.toDoQuestion} />
          </Tab>
          <Tab eventKey="answered" title="Answered Questions">
            <CardQuestions questions={props.completedQuestion} />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  const doneQuestionsByUser = Object.keys(users[authedUser].answers);
  const completedQuestion = Object.values(questions)
    .filter((question) => doneQuestionsByUser.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const toDoQuestion = Object.values(questions)
    .filter((question) => !doneQuestionsByUser.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  return { completedQuestion, toDoQuestion };
};

export default connect(mapStateToProps)(Home);
