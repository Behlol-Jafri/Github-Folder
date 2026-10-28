import React from 'react'
import { FaFacebookSquare, FaYoutube } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
    <div className='flex justify-evenly bg-gray-100 py-8 my-5'>
        <div className="space-y-2">
            <h2 className='font-bold'>CUSTOMER CARE</h2>
            <h3>ORDER TRACKING</h3>
            <h3>POLICIES</h3>
            <h3>FAQ'S</h3>
            <h3>CONTACT US</h3>
        </div>
        <div className="space-y-2">
            <h2 className='font-bold'>INFORMATION</h2>
            <h3>ABOUT US</h3>
            <h3>CONTACT US</h3>
            <h3>CAREERS</h3>
            <h3>STORE LOCATOR</h3>
            <h3>BLOGS</h3>
        </div>
    </div>
    <div className="flex justify-center items-center gap-5 my-3">
        <FaFacebookSquare  className='text-blue-700 text-3xl'/>
        <FaSquareInstagram  className='text-pink-600 text-3xl'/>
        <FaYoutube className='text-red-600 text-3xl' />
    </div>
    <div className="text-center mb-10">
        <p className='text-xs text-gray-700'>© 2026, Limelightpk Powered by Shopify  </p>
    </div>
    </>
  )
}

export default Footer