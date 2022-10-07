import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { handleSaveQuestion } from "../actions/questions";
import { connect } from "react-redux";
import authedUser from "../reducers/authedUser";
import Container from "react-bootstrap/Container";

const NewQuestion = (props) => {
  console.log(props.authedUser);
  const [inputOpt1, setInputOpt1] = useState("");
  const [inputOpt2, setInputOpt2] = useState("");

  const handleChangeOpt1 = (event) => {
    event.preventDefault();
    setInputOpt1(event.target.value);
  };

  const handleChangeOpt2 = (event) => {
    event.preventDefault();
    setInputOpt2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputOpt1);
    console.log(inputOpt2);
    props.handleSaveQuestion(
      inputOpt1,
      inputOpt2,
      props.authedUser,
    );
    setInputOpt1("");
    setInputOpt2("");

  };
  return (
    <Container >
      <h1>Would You Rather</h1>
      <h3>Create Your Own Poll</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstOption">
          <Form.Label>First Option</Form.Label>
          <Form.Control
            type="text"
            placeholder="Option One"
            value={inputOpt1}
            onChange={handleChangeOpt1}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="secondOption">
          <Form.Label>Second Option</Form.Label>
          <Form.Control
            type="text"
            placeholder="Option Two"
            value={inputOpt2}
            onChange={handleChangeOpt2}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={inputOpt1==="" || inputOpt2===""}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default connect(authedUser, { handleSaveQuestion })(NewQuestion);
