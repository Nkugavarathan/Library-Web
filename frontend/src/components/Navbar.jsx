import React from "react"
import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <div>
      <nav>
        <label>
          <Link to="/">Logo</Link>
        </label>
        <div>
          <Link to="/add-book">AddBook</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>
    </div>
  )
}
