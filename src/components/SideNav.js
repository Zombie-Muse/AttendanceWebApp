import { Link } from "react-router-dom";
import { BsPersonCheckFill } from "react-icons/bs";
import { useAuth } from "../context/AuthContext";

const SideNav = () => {
  const currentUser = useAuth();

  return (
    <div className="bg-blue-800 text-blue-100 w-64 space-y-10">
      <Link to="/" className="text-white flex items-center p-4">
        <BsPersonCheckFill className="mx-4" /> Here! Attendance
      </Link>
      <nav className="">
        <ul>
          {currentUser ? (
            <div>
              <li>
                <Link to="/" className="block py-3 px-4">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/students" className="block py-3 px-4">
                  Students
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="block py-3 px-4">
                  Teachers
                </Link>
              </li>
              <li>
                <Link to="/courses" className="block py-3 px-4">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/attendance" className="block py-3 px-4">
                  Attendance
                </Link>
              </li>
              <li>
                <Link to="/reports" className="block py-3 px-4">
                  Reports
                </Link>
              </li>
              <li>
                <Link to="/login" className="block py-3 px-4">
                  Login
                </Link>
              </li>
            </div>
          ) : (
            <div>
              <li>
                <Link to="/login" className="block py-3 px-4">
                  Login
                </Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};
export default SideNav;
