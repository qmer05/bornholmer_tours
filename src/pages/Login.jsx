import { useNavigate } from "react-router";

const Login = ({ users, setUser }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("login button clicked");

    const formElement = event.target;
    const form = new FormData(formElement);
    const formEntries = form.entries();
    const formJson = Object.fromEntries(formEntries);
    console.log(formJson);

    const usernameInput = formJson.login;
    const passwordInput = formJson.password;

    const user = users.find(
      (user) => usernameInput === user.login && passwordInput === user.password
    );

    const isAdminOrSuperman = user.roles.some(
      (role) => role === "admin" || role === "superman"
    );

    if (isAdminOrSuperman) {
      setUser(user);
      navigate("/admin");
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <label>Login</label>
        <br />
        <input
          name="login"
          id="login"
          type="text"
          placeholder="Username"
        />
        <br />
        <br />
        <label>Password</label>
        <br />
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Password"
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
