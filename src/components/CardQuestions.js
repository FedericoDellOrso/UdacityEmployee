import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import moment from "moment";
import { Link } from "react-router-dom";

const formatTime = (timestamp) => {
  let dateTimestamp = new Date(timestamp);
  let dateFormatted = moment(dateTimestamp).format("hh:mm DD.MM.YYYY");
  return dateFormatted;
};

const CardQuestions = ({ questions }) => {
  // const handleClickShow = (event) => {

  // };
  return (
    <Container>
      <Row className="justify-content-center">
        {questions.map((question) => (
          <Card className="m-2" style={{ width: "18rem" }} key={question.id}>
            <Card.Body>
              <Card.Body>
                <Card.Title>{question.author}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {formatTime(question.timestamp)}
                </Card.Subtitle>
              </Card.Body>
              <Link to={`/questions/${question.id}`}>
              <Button
                variant="outline-success"
              >
                Show
              </Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default CardQuestions;
