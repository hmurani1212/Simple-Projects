import React from 'react'
import { Outlet, Link } from "react-router-dom";
function Home() {
  const AuthToken = localStorage.getItem("AuthToken")
  return (
    <div className="justify-center text-center">
      <h1 className='text-3xl font-bold my-10   '>Simple Project in react js for begginer</h1>
      <Link to='/CurrencyConverter'>
        <p className='text-xl text-blue-600 hover:underline cursor-pointer '> 1) Currency Converter</p>
      </Link>
      <Link to='/PasswordGenrate'>
        <p className='text-xl text-blue-600 hover:underline cursor-pointer  '> 2) Password Genrate </p>
      </Link>
      <Link to='/Todo'>
        <p className='text-xl text-blue-600 hover:underline cursor-pointer mr-32'> 3) Todo</p>
      </Link>
      <Link to='/Quete'>
        <p className='text-xl text-blue-600 hover:underline cursor-pointer mr-16'> 4) quote App</p>
      </Link>
      <Link to='/Calculator'>
        <p className='text-xl  text-blue-600 hover:underline cursor-pointer mr-20'> 5) Calculator </p>
      </Link>
      <Link to='/TicTac'>
        <p className='text-xl text-blue-600 hover:underline cursor-pointer mr-16'> 6) Tic-Tac-Toe</p>
      </Link>
      <Link to='/Stopwatch'>
        <p className='text-xl text-blue-600 hover:underline cursor-pointer mr-16 '> 7) Stopwatch</p>
      </Link>
      <Link to='/Blog'>
        <p className='text-xl text-blue-600 hover:underline cursor-pointer mr-16 '> 8) Blog Website</p>
      </Link>
      <Link to='/ColorPicker'>
        <p className='text-xl text-blue-600 hover:underline cursor-pointer mr-16 '> 9) ColorPicker</p>
      </Link>
      {AuthToken ? <Link to='/Profile'>
        <p className='text-xl text-blue-600 hover:underline cursor-pointer mr-16 '> 10) How to create UserProfile</p>
      </Link> : <Link to='/Sign'>
        <p className='text-xl text-blue-600 hover:underline cursor-pointer mr-16 '> 10) How to create UserProfile</p>
      </Link>}
      <Link to='/Clock'>
        <p className='text-xl text-blue-600 hover:underline cursor-pointer mr-16 '> 11) Digital Clock </p>
      </Link>
      <Link to='/Chat'>
        <p className='text-xl text-blue-600 hover:underline cursor-pointer mr-16 '> 11) Chat </p>
      </Link>
      <Outlet />
    </div>
  )
}

export default Home