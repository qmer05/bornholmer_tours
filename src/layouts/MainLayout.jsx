import { Link, NavLink, Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="container">
      <header className="header">
        <Link to="/">
          <img src="logo.png" alt="Logo" className="logo" />
        </Link>
        <NavLink to="/login" className="login">Login</NavLink>
      </header>
      <div className="content">
        <nav className="sidebar">
          <ul>
            <li>
              <NavLink to="/travels">Travels</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      <footer className="footer">
        {" "}
        <p>&copy; 2024 Bornholmer Tours. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainLayout;
