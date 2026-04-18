import { createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  // fetching product from api 
  const fetchAllProducts = async ()=>{

    try {
        const res = await axios.get('https://fakestoreapi.com/products');
        console.log("API DATA:",res);

        const productData = res.data;
        setData(productData)

    } catch (error){
        console.log("ERROR:",error);
        

    }

  }

  const getUniqueCategory = (data, property) => {
    let values = data?.map((item) => item[property]);
    return [...new Set(values)]; // remove duplicates
  };

  const categoryData = getUniqueCategory(data, "category");


  return <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryData}}>{children}</DataContext.Provider>;
};

export const getData = ()=> useContext(DataContext)

