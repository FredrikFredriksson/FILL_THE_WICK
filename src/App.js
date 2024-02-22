import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// Remove the '.tsx' extension from your imports
import Home from "./pages/Home/Home";
import Partner from "./pages/Partner/Partner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/fonts.css';

function App() {
  return (
    <Router> {/* Wrap your Routes with Router */}
      <div className="app">
        <Navbar /> {/* Assuming you want your Navbar to be always visible */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
