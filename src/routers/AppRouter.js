import * as React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "../styles/styles.scss";
import Header from "../components/Header";
import NotFountePage from "../components/NotFound";
import Homepage from "../components/Home";
import ContactPage from "../components/Contact";
import PortfolioHome from "../components/PortfolioHome";
import Portfolios from "../components/Portfolios";

// When importing local files, start your import path with ./ if importing a file that's located in the same directory, or ../ if importing a file that's one or more directories up. //

const AppRouter = () => {
  return (
    <div className="AppRouter">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<PortfolioHome />} />
        <Route path="/portfolio/:id" element={<Portfolios />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFountePage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
