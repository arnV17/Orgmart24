import React from "react";
import "./LandingPage.css";

import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export default function LandingPage() {

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // 🔑 Sign in with Google
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken(); // 🔐 Firebase ID token

      // 🔄 Send token to backend
      const response = await fetch("http://localhost:5000/initialize-user", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      // 🚀 Navigate based on role
      if (data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/shop");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };




  return (
    <div className="landing-container">
      <header className="navbar">
        <div className="logo">
          <span className="green">Org</span>mart<sup>®</sup>
        </div>
        <nav className="nav-links">
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main className="main-content">
        <div className="hero-text">
          <h1>
            <span className="bold">Pure.</span>{""}
            <span className="green bold">Fresh.</span>
          </h1>
          <h2 className="subtitle">Organic vegetables & fruits.</h2>
        </div>
        <button onClick={handleLogin} className="order-button">Order Now</button>
      </main>
    </div>
  );
}
