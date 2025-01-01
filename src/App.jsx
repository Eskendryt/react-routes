import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Home from "./components/Home";
import Features from "./components/Features";
import Enterprise from "./components/Enterprise";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const InformationSection = () => (
  <div className="information-section py-4" style={{ backgroundColor: "#f8f9fa" }}>
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <h5>Features</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-dark">Cool stuff</a></li>
            <li><a href="#" className="text-dark">Random feature</a></li>
            <li><a href="#" className="text-dark">Team feature</a></li>
          </ul>
        </Col>
        <Col xs={12} md={4}>
          <h5>Resources</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-dark">Resource</a></li>
            <li><a href="#" className="text-dark">Resource name</a></li>
          </ul>
        </Col>
        <Col xs={12} md={4}>
          <h5>About</h5>
          <ul className="list-unstyled">
            <li><a href="#" className="text-dark">Team</a></li>
            <li><a href="#" className="text-dark">Locations</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app-container d-flex flex-column" style={{ minHeight: "100vh" }}>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="flex-grow-1" style={{ padding: "20px 0", maxWidth: "1200px", margin: "0 auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </div>

        {/* Information Section */}
        <InformationSection />

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
