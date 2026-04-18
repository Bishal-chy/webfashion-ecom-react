import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { category } = useParams();

  const getFilterData = async () => {
    try {
      setLoading(true);


      /* fake api */
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );

      setSearchData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFilterData();
  }, [category]);

  /* loading section*/
  if (loading) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        Loading...
      </div>
    );
  }

  return (
    
    <div className="max-w-6xl bg-gradient-to-r from-slate-300 to-orange-100 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 p-6 sm:p-10 md:p-16 lg:p-24">
      {searchData.length > 0 ? (
        searchData.map((item) => (
          <div
            key={item.id}
            onClick={()=> navigate(`/product/${item.id}`)}
            className="group cursor-pointer relative h-[500px] overflow-hidden shadow-md bg-white"
          >
           {/* Image section*/}
            <div className="absolute inset-0 flex items-center justify-center p-10 bg-[#eae7e4]">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[70%] object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500"></div>

          
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <div className="opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                
               
                <h2 className="text-2xl font-serif mb-2 leading-tight line-clamp-2">
                  {item.title}
                </h2>

               
                <p className="text-gray-900 font-bold mb-2 text-lg">
                  ${item.price}
                </p>

                
                <p className="text-sm opacity-80 mb-3 line-clamp-2 transition-all duration-700 delay-150">
                  {item.description}
                </p>

              
                <span className="text-xs tracking-[3px] uppercase opacity-70 transition-all duration-700 delay-300">
                  {item.category}
                </span>

              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-3 flex items-center justify-center h-[400px] text-xl text-gray-700">
          No Products Found
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;