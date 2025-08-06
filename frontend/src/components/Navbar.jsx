import React from "react"
import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg rounded-md">
        <label className="text-xl font-bold">
          <Link to="/" className="hover:text-yellow-300 transition">
            Logo
          </Link>
        </label>
        <div className="flex space-x-4">
          <Link
            to="/add-book"
            className="hover:bg-white hover:text-purple-600 px-4 py-2 rounded-md transition duration-200"
          >
            AddBook
          </Link>
          <Link
            to="/login"
            className="hover:bg-white hover:text-purple-600 px-4 py-2 rounded-md transition duration-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="hover:bg-white hover:text-purple-600 px-4 py-2 rounded-md transition duration-200"
          >
            Signup
          </Link>
        </div>
      </nav>
    </div>
  )
}
