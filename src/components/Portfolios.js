import React from "react";
import { useParams, Link } from "react-router-dom";

const Portfolios = () => {
  let { id } = useParams();
  return (
    (<h2>Things I've done</h2>),
    (
      <div>
        <p>You are seeing a portfolio with id of {id}</p>
        <Link to="/portfolio">Back to all portfolios</Link>
      </div>
    )
  );
};
export default Portfolios;
