import React, { useEffect } from 'react';
import { getData } from '../context/DataContext';
import SlickSlider from "react-slick";


const Slider = SlickSlider.default || SlickSlider;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from './Category';
import { useNavigate } from 'react-router-dom';


const Carousel = () => {
  const {data, fetchAllProducts} = getData()
  const navigate = useNavigate()

  useEffect(()=>{
    fetchAllProducts();
  }, []);

 
  const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        top:"50%",
        transform: "translateY(-50%)",
        left: "20px",
        zIndex: 10,
        background: "#312f3329",
        borderRadius: "50%",
        border:"#00000021",
        width: "45px",
        height: "45px",
      }}
    >
     
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      onClick={onClick}
      style={{
       ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: "20px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 10,
        background: "#312f3329",
        borderRadius: "50%",
        border:"#00000021",
        width: "45px",
        height: "45px",
      }}
    >
    </div>
  );
};  

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  };
 

  return (
  <div className="w-full overflow-hidden">
    {/* using slick carousel */}
    <Slider {...settings}>
      {data?.slice(0, 7)?.map((item, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-[#9fbec4] to-[#b7a6ab]"
        >
          {/* main sec */}
          <div
            className="flex flex-col md:flex-row items-center justify-between
            min-h-[560px] sm:min-h-[620px] md:h-[600px]
            px-4 sm:px-8 md:px-16
            pt-10 pb-0"
          >
            
            <div className="max-w-xl space-y-4 text-center md:text-left">
              <p
                data-aos="fade-up"
                data-aos-duration="500"
                className="text-xs sm:text-sm tracking-widest"
              >
                Let Be United The Fashion Design
              </p>

              <h1
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-3xl sm:text-5xl md:text-7xl font-serif leading-tight"
              >
                UNITED BY FASHION
              </h1>

              <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                className="text-lg sm:text-2xl uppercase line-clamp-2"
              >
                {item.title}
              </h2>

              <button
                data-aos="fade-up"
                data-aos-duration="1500"
                onClick={() => navigate(`/product/${item.id}`)}
                className="cursor-pointer border border-black px-5 py-2 hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
              >
                Explore More
              </button>
            </div>

            {/* image section */}
            <div className="flex items-end justify-center mt-6 md:mt-0 w-full md:w-auto">
              <div
                className="w-[220px] sm:w-[260px] md:w-[320px]
                h-[260px] sm:h-[320px] md:h-[400px]
                flex items-end justify-center"
              >
                <img
                  data-aos="fade-up"
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Hero background text */}
          <h1
            className="text-[65px] sm:text-[110px] md:text-[180px]
            text-gray-700/20 text-center font-serif
            leading-none md:-mt-1 mb-12"
          >
            FASHION
          </h1>
        </div>
      ))}
    </Slider>

    {/* Category  */}
    <div className="-mt-1 md:-mt-8">
      <Category />
    </div>
  </div>
);
};

export default Carousel;
