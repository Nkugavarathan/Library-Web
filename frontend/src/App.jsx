import React from "react"
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import AddBook from "./pages/AddBook"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import ErrorPage from "./pages/ErrorPage"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Homepage />
      <Footer />
    </>
  )
}
