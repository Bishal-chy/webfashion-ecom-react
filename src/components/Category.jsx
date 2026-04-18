import React, { useContext } from "react";
import { DataContext, getData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const { categoryData } = getData();
  const navigate = useNavigate();
  return (
  <div className=" relative  z-10 -mt-6 md:-mt-10 bg-gradient-to-r from-zinc-500 to-slate-300">
    
    <div className="max-w-7xl mx-auto px-4 py-5 sm:py-7">

      <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center">

        {categoryData?.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(`/category/${item}`)}
            className="uppercase font-serif leading-tight 
            bg-black px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm
            cursor-pointer text-white border border-black
            hover:bg-transparent hover:text-black hover:border-black
            transition-all duration-300 ease-in-out"
          >
            {item}
          </button>
        ))}

      </div>

    </div>

  </div>
);
};

export default Category;