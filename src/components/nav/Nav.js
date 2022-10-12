import React, {useState} from 'react';
import logo from "../../assets/logo-redondo.png";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import { Bars3Icon } from '@heroicons/react/24/outline';

const Nav = ({categories}) => {
  const [open, setOpen] = useState(false)
  const handleNav = () => {
    setOpen(!open)
  }
  return (
    <header className='flex fixed bg-white justify-between items-center z-50 h-20 w-full mx-auto px-4 text-black border-b border-b-pink-600'>
      <div className='flex items-center'>
         <Link to="/">
           <img src={logo} alt="Fajada logo" className='h-[50px]'/>
         </Link>
         <Link to="/">
           <span className="hidden md:block self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
           Fajada
           </span>
         </Link>
       </div>
      <div className='hidden md:flex bg-white items-center space-x-10 text-sm uppercase font-bold'>
        {categories.map((e, i)=>{
        return <Link key={(e.id) + (i)} to={e.route} className="py-4 hover:border-b hover:border-pink-800">{e.name}</Link>
        })}
      </div>
      <div className='hidden md:block'>
       <Link to="/cart">
         <CartWidget/>
       </Link>            
      </div>
      <div onClick={handleNav} className='block md:hidden'>
          <Bars3Icon className='h-8 w-8 text-black'/>
      </div>
        {/*Mobile Navbar*/}
      <div className={open ? 'fixed p-4 left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-white/95 duration-500' : 'top-0 fixed duration-500 h-full left-[-100%]'}>
        <div className='flex items-center gap-2'>
          <Link to="/">
            <img src={logo} alt="Fajada logo" className='h-[50px]'/>
          </Link>
          <Link to="/">
             <span className="text-2xl font-semibold dark:text-white">
             Fajada
             </span>
           </Link>
        </div>
        <nav className='flex justify-center items-center flex-col lg:space-x-10 text-sm uppercase font-medium'>
             {categories.map((e, i)=>{
               return <Link key={(e.id) + (i)} to={e.route} className="p-4 w-full border-b border-pink-600">{e.name}</Link>
             })}
        </nav>
        <Link to="/cart" className='absolute top-5 right-4'>
         <CartWidget/>
        </Link> 
      </div>
    </header>

  );
};

export default Nav