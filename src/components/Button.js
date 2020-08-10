import React from "react";

const Button = ({ children }) => (
  <div>
    <button type="button" className="nav-btn">
      {children}
    </button>
  </div>
);

export default Button;
