import React, { useState, useEffect } from "react";
import "./Home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHeader from "./header/Main-header";
import Menu from "./pages/Menu";
import GeneralGuide from "./pages/GeneralGuide";
import ViolationGuide from "./pages/ViolationGuide";
import LoadingScreen from "./Loading";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="Home-container">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="Content-wrapper">
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <MainHeader />
                    <Menu />
                  </>
                }
              />
              <Route
                path="/GeneralGuide"
                element={
                  <>
                    <MainHeader showBackButton={true} />
                    <GeneralGuide />
                  </>
                }
              />
              <Route
                path="/ViolationGuide"
                element={
                  <>
                    <MainHeader showBackButton={true} />
                    <ViolationGuide />
                  </>
                }
              />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
}

export default Home;