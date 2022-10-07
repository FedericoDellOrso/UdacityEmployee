import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import ProgressBar from "react-bootstrap/ProgressBar";
import { handleSaveAnswerToQuestion } from "../actions/questions";
import Figure from "react-bootstrap/Figure";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const PollShow = (props) => {
  let voted = false;
  let option1Voted = false;
  let numberofVotes1, numberofVotes2, numberTotalVotes,avatarUser;
  if (props.questionToShow.length !== 0) {
    numberofVotes1 = props.questionToShow[0].optionOne.votes.length;
    numberofVotes2 = props.questionToShow[0].optionTwo.votes.length;
    numberTotalVotes = numberofVotes1 + numberofVotes2;
    avatarUser = props.users[props.questionToShow[0].author].avatarURL
  }
  if (Object.keys(props.userInfo.answers).includes(props.question_id)) {
    voted = true;
    props.userInfo.answers[props.question_id] === "optionOne"
      ? (option1Voted = true)
      : (option1Voted = false);
  }

  const handleClick = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    props.handleSaveAnswerToQuestion(
      props.authedUser,
      props.question_id,
      event.target.value
    );
  };

  

  return (
    <div>
      {props.questionToShow.length === 0 ? (
        <h1>404 error</h1>
      ) : (
        <div>
          <h1>{`Poll by ${props.questionToShow[0].author}`}</h1>
          <h1>Would you rather</h1>
          <Figure>
            <Figure.Image
              width={170}
              height={180}
              src={avatarUser}
            />
          </Figure>
          <Row className="justify-content-center">
            <Card className="m-2" style={{ width: "10rem" }}>
              <Card.Body>
                <Card.Title>
                  {props.questionToShow[0].optionOne.text}
                </Card.Title>
              </Card.Body>
              {!voted ? (
                <Button
                  variant="success"
                  className="m-2"
                  onClick={handleClick}
                  value={"optionOne"}
                >
                  Vote
                </Button>
              ) : option1Voted ? (
                <h3>
                  <Badge bg="primary">Your Choice</Badge>
                </h3>
              ) : (
                <p></p>
              )}
              {voted && (
                <Container>
                  <p>{`${numberofVotes1} votes`}</p>
                  <p>{`${((numberofVotes1 * 100) / numberTotalVotes).toFixed(
                    2
                  )}%`}</p>
                  <ProgressBar
                    className="m-2"
                    variant="success"
                    now={(numberofVotes1 * 100) / numberTotalVotes}
                  />
                </Container>
              )}
            </Card>
            <Card className="m-2" style={{ width: "10rem" }}>
              <Card.Body>
                <Card.Title>
                  {props.questionToShow[0].optionTwo.text}
                </Card.Title>
              </Card.Body>
              {!voted ? (
                <Button
                  variant="success"
                  className="m-2"
                  onClick={handleClick}
                  value={"optionTwo"}
                >
                  Vote
                </Button>
              ) : !option1Voted ? (
                <h3>
                  <Badge bg="primary">Your Choice</Badge>
                </h3>
              ) : (
                <p></p>
              )}
              {voted && (
                <Container>
                  <p>{`${numberofVotes2} votes`}</p>
                  <p>{`${((numberofVotes2 * 100) / numberTotalVotes).toFixed(
                    2
                  )}%`}</p>
                  <ProgressBar
                    className="m-2"
                    variant="success"
                    now={(numberofVotes2 * 100) / numberTotalVotes}
                  />
                </Container>
              )}
            </Card>
          </Row>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { question_id } = props.router.params;
  const questionToShow = Object.values(questions).filter(
    (question) => question.id === question_id
  );
  const userInfo = users[authedUser];
  return { question_id, questionToShow, userInfo, authedUser,users };
};

export default withRouter(
  connect(mapStateToProps, { handleSaveAnswerToQuestion })(PollShow)
);
