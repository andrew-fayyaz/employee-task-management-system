import { useContext, useState } from "react";
import Login from "./components/auth/Login";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [user, setUser] = useState(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) return null;

    const userData = JSON.parse(loggedInUser);

    return userData.role;
  });

  const [loggedInUserId, setLoggedInUserId] = useState(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) return null;

    const userData = JSON.parse(loggedInUser);

    return userData.id || null;
  });

  const authData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (!authData) return;

    const admin = authData.admin.find(
      (e) => email === e.email && password === e.password,
    );

    if (admin) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      return;
    }

    const employee = authData.employees.find(
      (e) => email === e.email && password === e.password,
    );

    if (employee) {
      setUser("employee");
      setLoggedInUserId(employee.id);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employee",
          id: employee.id,
        }),
      );

      return;
    }

    alert("Invalid credentials");
  };

  const loggedInUserData = authData?.employees?.find(
    (employee) => employee.id === loggedInUserId,
  );

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard changeUser={setUser} />}
      {user === "employee" && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
}

export default App;
