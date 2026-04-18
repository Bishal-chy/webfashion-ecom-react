import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadceums from "./Breadceums";

const SingleProduct = () => {
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const getSingleProduct = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      // FakeStore API returns product directly
      setSingleProduct(res.data);

      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
    <Breadceums title={singleProduct?.title} />
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/*ApI image*/}
        <div className="bg-gray-100 p-8 rounded-xl">
          <img
            src={singleProduct?.image}
            alt={singleProduct?.title}
            className="w-full h-[400px] object-contain"
          />
        </div>

       {/*Details*/}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">
            {singleProduct?.title}
          </h1>

          <p className="text-gray-500 capitalize">
            {singleProduct?.category}
          </p>

          <h2 className="text-2xl font-semibold text-green-600">
            ${singleProduct?.price}
          </h2>

          <p className="text-gray-700 leading-7">
            {singleProduct?.description}
          </p>

          <button className=" cursor-pointer border border-black px-5 py-2 hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default SingleProduct;