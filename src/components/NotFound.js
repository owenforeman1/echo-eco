import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>We couldn't find what you're looking for.</p>
      <Link to="/" style={{ color: "#4a5d3b", fontWeight: "bold" }}>
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
