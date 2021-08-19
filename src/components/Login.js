import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthProvider, useAuth } from "../context/AuthContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in.");
    }
    setLoading(false);
  }

  return (
    <AuthProvider>
      <div className="flex items-center w-full justify-center">
        <form
          className="max-w-xl br-white shadow-xl rounded px-10 pt-6 pb-8"
          onSubmit={handleSubmit}>
          <div className="mb-4">
            <h2 className="text-center font-bold text-gray-800 text-xl pb-8">
              Log In
            </h2>

            {error && (
              <p className="text-red-500 text-sm italic pb-2 ">{error}</p>
            )}
            <label
              className="block text-gray-900 text-sm font-bold mb-2"
              htmlFor="email">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              ref={emailRef}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-900 text-sm font-bold mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
            {error && (
              <p className="text-red-500 text-xs italic ">
                Please choose a password.
              </p>
            )}
          </div>

          <div className="flex items-center justify-center">
            <button
              disabled={loading}
              className="bg-blue-700 w-full hover:bg-blue-500 text-white font-bold py-1 rounded focus:shadow-outline"
              type="submit"
              onSubmit={handleSubmit}>
              Log In
            </button>
          </div>
          <div className="flex items-center justify-center text-sm hover:text-blue-400 pt-2">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="flex items-center justify-center pt-10">
            <p className="text-gray-500 text-xs py-8 pb-2">
              New user? Sign up here!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Link
              to="/signup"
              className=" hover:bg-gray-200 text-gray-700 text-xs font-bold py-1 px-2 rounded focus:shadow-outline">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </AuthProvider>
  );
}
