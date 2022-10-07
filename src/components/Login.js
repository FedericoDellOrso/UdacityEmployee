import { connect } from "react-redux";
import { Dropdown, DropdownButton } from "react-bootstrap";
import {setAuthedUser} from "./../actions/authedUser";
import Figure from "react-bootstrap/Figure";

const Login = (props) => {
  const handleDropClick = (event) => {
    console.log("chose:",event);
    props.setAuthedUser(event);

  };
  return (
    <div>
      <h1>Employee Polls</h1>
      <Figure>
            <Figure.Image
              width={170}
              height={180}
              src="/images/employee.png"
            />
          </Figure>
      <h1>Log In</h1>

        <DropdownButton
          variant="primary"
          id="dropdown-login"
          title="Choose User"
          onSelect={handleDropClick}
          data-testid="dropdown"
        >
          {props.users.map((user) => {
            return (
              <Dropdown.Item key={user.id} eventKey={user.id}>
                {user.name}
              </Dropdown.Item>
            );
          })}
          </DropdownButton>
    </div>
  );
};
const mapStateToProps = ({ users }) => ({ users: Object.values(users) });

export default connect(mapStateToProps,{setAuthedUser})(Login);
