import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Travels from "./pages/Travels";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import AdminShowUser from "./pages/AdminShowUser";
import { useState, useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component

const App = () => {
  const url = "http://localhost:4000/users";
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/travels" element={<Travels />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute user={user} allowedRoles={["admin", "superman"]}>
              <Admin users={users} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={<Login users={users} setUser={setUser} />}
        />
        <Route path="/admin-show-user" element={<AdminShowUser />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
