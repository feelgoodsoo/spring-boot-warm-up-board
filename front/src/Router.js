import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WritePage from "./pages/WritePage";
import StartPage from "./pages/StartPage";
import PostDetail from "./pages/PostDetail";
import BoardUpdate from "./pages/BoardUpdate";
import Login from "./pages/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Start</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/write">Write</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>

      <Routes>
        <Route exact path="/" element={<StartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/board/:id" element={<PostDetail />} />
        <Route path="/update/:id" element={<BoardUpdate />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
