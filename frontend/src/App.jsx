import React from "react";
import { Flowbite } from "flowbite-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import LoginPage from "./pages/LoginPage";
import OTPPage from "./pages/OTPPage";
import ProductPage from "./components/ProductPage";

function App() {
  const url =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_BACKEND_URL_DEVELOPMENT
      : process.env.REACT_APP_BACKEND_URL_PRODUCTION;

  return (
    <Flowbite>
      <div className="dark:bg-cyan-800">
        <Router>
          <div>
            <Header />
            <Routes>
              <Route exact path="/" element={<MainPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/sendOTP" element={<OTPPage />} />
              <Route path="/Product" element={<ProductPage/>} />
            </Routes>
          </div>
        </Router>
      </div>
    </Flowbite>
  );
}

export default App;
