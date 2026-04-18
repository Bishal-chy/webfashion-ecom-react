import React from 'react'
import { useNavigate } from 'react-router-dom'

const Breadceumbs = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <h1 className="text-xl font-semibold text-gray-700">
        <span onClick={() => navigate("/")} className="cursor-pointer hover:text-blue-300 transition-colors duration-300">
          Home
        </span>{" "}
        /{" "}
        <span onClick={() => navigate("/product")} className="cursor-pointer  hover:text-blue-300 transition-colors duration-300">
          Products
        </span>{" "}
        / <span>{title || "Loading..."}</span>
      </h1>
    </div>
  );
};

export default Breadceumbs;
