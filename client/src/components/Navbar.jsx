import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white flex justify-evenly my-10 gap-16 '>
      
      <div>
        <h1 className='text-2xl font-bold font-poppins'>
            Talentbridge
        </h1>
      </div>

      <div>
        <ul className='flex gap-10 font-poppins'>
            <li>Employers</li>
            <li>Jobs</li>
            <li>Featured Insights</li>
            <li>Career</li>
            <li>About Us</li>
        </ul>
      </div>

      <div>
        <div className='font-poppins font-bold text-xl'>
            <a>Register </a>
            <a >|</a>
            <a > Login</a>
        </div>
      </div>

    </div>
  )
}

export default Navbar
