import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo2} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Welcome to STITCH, this site is built by Kshitij Pandey, Hope you like it</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 7004244382</li>
                <li>kshitijpandey@gmail.com</li>
            </ul>
        </div>
        
      </div>
      <div>
            <hr className=' border-gray-300'/>
            <p className='py-5 text-sm text-center'>Copyright 2025@ stitch.com - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
