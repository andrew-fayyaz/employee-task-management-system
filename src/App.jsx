import { useEffect } from "react";
import Login from "./components/auth/Login";
import { setLocalStorage } from "./utils/localStorage";

function App() {
  useEffect(() => {
    setLocalStorage();
    // getLocalStorage();
  });

  return (
    <>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
}

export default App;
