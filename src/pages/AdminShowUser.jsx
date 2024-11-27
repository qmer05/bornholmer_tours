import { useLocation } from "react-router";

const AdminShowUser = () => {
  const location = useLocation();

  const { user } = location.state; // Safely destructure user

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Roles</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.login}</td>
            <td>{user.roles.join(", ")}</td>{" "}
            {/* Display roles as a comma-separated list */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminShowUser;
