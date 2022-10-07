import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";

const Leaderboard = (props) => {
  console.log(props.sortedUsers);
  return (
    <Container className="justify-content-center">
      <Table striped bordered hover className="m-1">
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(props.sortedUsers).map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <Figure>
                    <Figure.Image width={40} height={40} src={user.avatarURL} />
                  </Figure>
                  {user.name}
                </td>
                <td>{Object.keys(user.answers).length}</td>
                <td>{user.questions.length}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

const mapStateToProps = ({ users }) => {
  const sortedUsers = Object.values(users)
    .map((user) => {
      return {
        ...user,
        tot: user.questions.length + Object.keys(user.answers).length,
      };
    })
    .sort((a, b) => a.tot < b.tot);
  console.log("Sorted", sortedUsers);
  return { sortedUsers };
};

export default connect(mapStateToProps)(Leaderboard);
