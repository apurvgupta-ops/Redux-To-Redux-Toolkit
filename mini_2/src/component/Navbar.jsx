import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-auto mb-10">
      <div className="flex justify-between">
        <h4 className="font-extrabold text-2xl">Redux Toolkit</h4>
        <Link to="/cart" className="font-extrabold text-2xl">
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
