import React from "react";
import Weather from "./components/Weather";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Weather defaultCity="Odesa" />
      <Footer />
    </div>
  );
}
