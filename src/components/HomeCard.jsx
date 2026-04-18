
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomeCard = () => {
  const [products, setProducts] = useState([]);
   const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data.slice(0, 3));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className=" bg-gradient-to-r from-slate-300 to-orange-100 py-20 px-6">
      
      {/* header*/}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <div data-aos="fade-up"
data-aos-duration="700" className="w-full h-[1px] bg-black/20 mb-6"></div>

        <h1 data-aos="fade-up"
data-aos-duration="1200" className="text-5xl md:text-6xl font-serif uppercase tracking-[10px] text-gray-800">
          Products
        </h1>
      </div>

      {/* grid */}
      <div className="max-w-6xl  mx-auto grid md:grid-cols-3 gap-10">

        {products.map((item) => (
          <div
            key={item.id}
             onClick={() => navigate(`/product/${item.id}`)}
            className="group cursor-pointer relative h-[500px] overflow-hidden  shadow-md bg-white"
          >
            {/*Image section*/}
            <div className="absolute inset-0 flex items-center justify-center p-10 bg-[#eae7e4]">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[70%] object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* overlay gradient*/}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500"></div>

           {/*text*/}
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              
            <div className="opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
    
  
    <h2 className="text-2xl font-serif mb-2 leading-tight">
      {item.title}
    </h2>

   
    <p className="text-sm opacity-80 mb-3 line-clamp-2 transition-all duration-700 delay-150">
      {item.description}
    </p>

    
    <span className="text-xs tracking-[3px] uppercase opacity-70 transition-all duration-700 delay-300">
      {item.category}
    </span>

  </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default HomeCard;