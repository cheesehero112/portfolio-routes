import React from "react";
import { Link } from "react-router-dom";

const PortfolioHome = () => (
  <div>
    <h2>This is my portfolio page!</h2>
    <div className="portfolio-list">
      <Link to="1">Item 1 </Link>
      <Link to="2">Item 2 </Link>
    </div>
  </div>
);

export default PortfolioHome;
