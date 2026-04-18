import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
    const navigate = useNavigate()
  return (
  <div onClick={() => navigate(`/product/${product.id}`)}
    className="group  relative border border-gray-100  overflow-hidden cursor-pointer 
    hover:shadow-2xl transition-all duration-500 " 
  >
    {/*Image*/}
    <div
      className="relative bg-gray-100 aspect-square flex items-center justify-center p-6 overflow-hidden"
    >
      <img
        src={product.image}
        alt={product.title}
        className="max-h-[80%] object-contain transition-transform duration-700 group-hover:scale-110"
      />

      {/*dark hover overlay*/}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
    </div>

    {/*showing hidden contnt on over*/}
    <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out bg-gradient-to-r from-slate-300 to-orange-100 backdrop-blur-md">

      
      <h1 className="line-clamp-2 font-semibold text-gray-800">
        {product.title}
      </h1>

      
      <p className="my-2 text-lg font-bold text-gray-900">
        ${product.price}
      </p>

     
      <button
        className="w-full flex items-center justify-center gap-2 font-serif leading-tight
        bg-black px-3 py-2 cursor-pointer text-white border border-black
        hover:bg-transparent hover:text-black hover:border-black
        transition-all duration-300 ease-in-out rounded-lg"
      >
        <IoCartOutline className="w-5 h-5" />
        Add to Cart
      </button>

    </div>
  </div>
);
}

export default ProductCard
