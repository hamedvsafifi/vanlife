import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[rgba(255,247,237,1)]">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<h2>Vans Page</h2>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
