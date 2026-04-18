import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=' bg-gray-800 px-4 md:px-16 lg:px-28 py-8'>
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div>
            <h2 data-aos="fade-up"
                data-aos-duration="500" className=' text-lg font-bold mb-4 text-white'>About us</h2>
            <p className=' text-gray-300'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
            </div>
            <div>
                <h2 data-aos="fade-up"
                data-aos-duration="800" className=' text-lg font-bold mb-4 text-white'>Quicks Links</h2>
                <ul>
                    <li>
                        <a href='' className=' hover:underline text-gray-300'>Home</a>
                    </li>
                    <li>
                        <a href='' className=' hover:underline text-gray-300'>Product</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 data-aos="fade-up"
                data-aos-duration="500" className=' text-lg font-bold mb-4 text-white'>Follow Us</h2>
                 <ul className=' flex space-x-4'>
                    <li> <FaFacebook className=' text-blue-400'/>{""}
                        <a href='' className=' hover:underline text-gray-300'>Home</a>
                    </li>
                    <li> <FaInstagram className=' text-amber-800' />{""}
                        <a href='' className=' hover:underline text-gray-300'>Instagram</a>
                    </li>
                    <li> <FaTwitter className=' text-blue-700' />{""}
                        <a href='' className=' hover:underline text-gray-300'>Instagram</a>
                    </li>
                </ul>

            </div>
        </div>
        <div className='  border-t border-gray-700 pt-6 text-gray-300 text-center mt-6'>
            <p>Code with Bishal @ 2026. All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer
