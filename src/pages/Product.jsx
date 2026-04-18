
import { getData } from '../context/DataContext'
import Loading from '../assets/Spinner@1x-1.0s-200px-200px.gif'
import ProductCard from '../components/ProductCard';
import { useEffect } from 'react';

const Product = () => {
const {data, fetchAllProducts} = getData()

useEffect(()=>{
  fetchAllProducts()
},[]);


  return (
    <div>
      <div className=' max-w-6xl mx-auto px-4 mb-10 pt-10'>
        {
            data?.length > 0 ? (
                <div className=' flex gap-8 '> 
                <div className="grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-5 sm:gap-6 lg:gap-7">
                    {
                        data?.map((product, index)=>{
                            return <ProductCard key={index} product={product}/>
                        })
                    }
                </div>

                </div>
            ): (
                <div className='flex items-center justify-center h-[400px]'>
                <img
              src={Loading}
              alt="Loading..."
              className="w-24 h-24 animate-pulse"
            /> 
                
                </div>
            )
        }
      </div>
    </div>
  )
}

export default Product
