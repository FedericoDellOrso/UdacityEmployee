import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Row";
import moment from "moment";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const formatTime = (timestamp) => {
  let dateTimestamp = new Date(timestamp);
  let dateFormatted = moment(dateTimestamp).format("hh:mm DD.MM.YYYY");
  return dateFormatted;
};

const CardQuestions = ({ questions }) => {
  return (
    <Container>
      <ListGroup >
        {questions.map((question) => (
          <ListGroup.Item key={question.id}>
            <Card className="m-2"  >
              <Card.Body>
                  <Card.Title>{question.author}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {formatTime(question.timestamp)}
                  </Card.Subtitle>
                <Link to={`/questions/${question.id}`}>
                  <Button variant="outline-success">Show</Button>
                </Link>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default CardQuestions;
