import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory;

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout.");
    }
  }

  return (
    <>
      <div className="block items-center w-full justify-center">
        <h2 className="text-center font-bold text-4xl mb-4">Dashboard</h2>
        <div className="br-white shadow-xl rounded px-10 pt-6 pb-8 m-10">
          <p>Here is the dashboard!</p>
          {error}
          <strong>Email: </strong> {currentUser.email}
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={handleLogout}
            className=" hover:bg-gray-200 text-gray-700 text-xs font-bold py-1 px-2 rounded focus:shadow-outline">
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}
