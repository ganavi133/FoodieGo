
import './App.css';
import Home from './screen/Home';
import Login from './screen/Login'
import React from "react";
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css'; // Import the dark theme
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS



import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route excat path="/" element={<Home/>} />
          <Route excat path="/Login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
