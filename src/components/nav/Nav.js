import React from 'react'
import logo from "../../assets/logo-redondo.png"
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom";

const Nav = ({categories}) => {
  return (
    <>
    <header className='flex items-center border-b border-pink-600'>
      <div className="flex items-center justify-between flex-1 pl-4 pr-12 py-4">
        <div className='flex '>
          <Link to="/">
            <img src={logo} alt="Fajada logo" className='h-6 sm:h-9'/>
          </Link>
          <Link to="/">
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Fajada
            </span>
          </Link>
        </div>
        <nav className='flex items-center space-x-10 text-sm uppercase font-medium'>
            {categories.map((e, i)=>{
              return <Link key={(e.id) + (i)} to={e.route} className="py-1 hover:border-b hover:border-pink-800">{e.name}</Link>
            })}
        </nav>
        <div>
          <Link to="/cart">
            <CartWidget/>
          </Link>            
        </div>
      </div>
    </header>
    </>
  )
}

export default Nav