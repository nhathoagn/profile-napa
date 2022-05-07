import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import img from "../../images/404.png";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <div className="img-err">
        <img src={img} alt="Page not found" />
      </div>
      <div className="error-page">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for isn't available</p>
        <p>
          Try your search again or click button below to navigate to Home page
        </p>
        <button className="go-home" onClick={() => navigate(`/`)}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
