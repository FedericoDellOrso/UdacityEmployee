import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { setAuthedUser } from "../actions/authedUser";

const NavigationUda = (props) => {
    const handleClick = (event) => {
        event.preventDefault();
        props.setAuthedUser(null);
    }
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand>Employee Polls</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/leaderboard" data-testid="Leaderboard">
            Leaderboard
          </Nav.Link>
          <Nav.Link as={Link} to="/add">
            New
          </Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Navbar.Text>Signed in as: {props.authedUser}</Navbar.Text>
          <Button variant="outline-secondary" size="sm" className="m-2" onClick={handleClick}>
            LogOut
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps,{setAuthedUser})(NavigationUda);
