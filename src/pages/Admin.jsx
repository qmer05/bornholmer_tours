import { useNavigate } from 'react-router';

const Admin = ({ users }) => {
  const navigate = useNavigate();

  const handleViewUser = (user) => {
    navigate("/admin-show-user", { state: { user } });
  };

  return (
    <div className="admin-page">
      <h1>Admin</h1>
      <h2>List of all users</h2>

      <div>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userid}>
                <td>{user.login}</td>
                <td>
                  <button onClick={() => handleViewUser(user)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
