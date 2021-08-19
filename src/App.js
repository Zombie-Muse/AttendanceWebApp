import { BrowserRouter, Route, Switch } from "react-router-dom";
import SideNav from "./components/SideNav";
import Dashboard from "./components/Dashboard";
import Students from "./components/Students";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";
import Attendance from "./components/Attendance";
import Reports from "./components/Reports";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";

// import { useEffect, useState } from "react";

function App() {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("localhost:47938/api/courses")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw response;
  //     })
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching data: ", error);
  //       setError(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return "Loading...";
  // if (error) return "Error!";

  return (
    <div className="relative min-h-screen flex">
      <BrowserRouter>
        <AuthProvider>
          <SideNav />
          <Switch>
            <PrivateRoute component={Dashboard} path="/" exact />
            <PrivateRoute component={Students} path="/students" />
            <PrivateRoute component={Teachers} path="/teachers" />
            <PrivateRoute component={Courses} path="/courses" />
            <PrivateRoute component={Attendance} path="/attendance" />
            <PrivateRoute component={Reports} path="/reports" />
            <Route component={Signup} path="/signup" />
            <Route component={Login} path="/login" />
            <Route component={ForgotPassword} path="/forgot-password" />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
