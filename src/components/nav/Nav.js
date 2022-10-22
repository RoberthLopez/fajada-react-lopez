import React, {useState, useContext, useEffect} from 'react';
import logo from "../../assets/logo-redondo.png";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import { Bars3Icon, UserCircleIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {UserCircleIcon as UserIcon} from '@heroicons/react/24/solid';
import { UserContext } from '../../context/UserContext';
import { db } from '../../firebase/firebase';
import { collection, getDoc, doc } from 'firebase/firestore';
import UserIdModal from '../UserIdModal/UserIdModal';
import OrderSearch from '../OrderSearch/OrderSearch';

const Nav = ({categories}) => {
  const [open, setOpen] = useState(false);
  const [showUser, setShowUser ] = useState(false);
  const [search, setSearch ] = useState(false);
  const [searchId, setSearchId ] = useState('');
  const [searchItem, setSearchItem] = useState(null);
  const [showSearchIdModal, setShowSearchIdModal ] = useState(false);

  const { user, logOut } = useContext(UserContext)

  const openShowUser = () => {
    setShowUser(!showUser);
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (e.target.searchItem.value === '') {
      return;
    }
    else {
      setSearchId(e.target.searchItem.value);
    }  
    
  };

  const openSearch = () => {
    setSearch(!search);
  };

  const handleNav = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (searchId === ''){
      return;
    }else {
      try {
        const salesCol = collection(db, 'sales');
        const docRef = doc(salesCol, searchId)
        getDoc(docRef)
        .then((data)=> {
          setSearchItem({
            total:data.data().total,
            items:data.data().items
          })
          setShowSearchIdModal(true)
          
        })
      } catch (err) {
        console.error(err)
      };
    };

    

  }, [searchId]);
  



  return (
    <header className='flex md:grid md:grid-cols-3 fixed bg-white justify-between items-center z-50 h-20 w-full mx-auto px-4 text-black border-b border-b-pink-600'>
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
      <div className='hidden md:flex margin-auto bg-white justify-center space-x-10 text-sm uppercase font-bold'>
        {categories.map((e, i)=>{
        return <Link key={(e.id) + (i)} to={e.route} className="py-4 hover:border-b z-50 hover:border-pink-800">{e.name}</Link>
        })}
      </div>
      <div className='hidden md:flex justify-end gap-4'>
        <div className='relative'>
          <MagnifyingGlassIcon onClick={openSearch} className='h-8 w-8 text-black' />
          <form onSubmit={handleSearch} className={`${search === true ? 'flex' : 'hidden' } flex-col gap-2 absolute top-10 right-0 w-[200px] bg-white rounded p-5 shadow-md`}>
              <input type='text' name='searchItem' className=" h-9 justify-center text-center rounded-lg text-pink-500 border-pink-300 bg-pink-100/75 focus:outline-none focus:ring focus:ring-pink-300 focus:border-none" placeholder='Ingresa el ID'></input>
              <button type='submit' className='rounded-lg bg-pink-700 px-5 py-2 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800'>
                Buscar Orden 
              </button>
          </form>
        </div>
        
        {user ? 
        <div className='relative'>
          <UserIcon  onClick={openShowUser} className='h-8 w-8 text-black'/>
          <div className={`${showUser === true ? 'flex' : 'hidden' } flex-col gap-2 absolute top-10 right-0 bg-white rounded p-5 shadow-md`}>
            <span className='font-bold'>{user.email}</span>
            <button onClick={logOut} className='rounded-lg bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800'>Cerrar Sesión</button>
          </div>
          
        </div> : 
        <Link to='/login' >
          <UserCircleIcon className='h-8 w-8 text-black'/>
        </Link>}

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
             <span className=" hidden text-2xl font-semibold sm:block  dark:text-white">
              Fajada
             </span>
           </Link>
        </div>
        <nav className='flex justify-center items-center flex-col lg:space-x-10 text-sm uppercase font-medium'>
             {categories.map((e, i)=>{
               return <Link key={(e.id) + (i)} to={e.route} className="p-4 w-full border-b border-pink-600">{e.name}</Link>
             })}
             {user && 
             <div className='flx flex-col justify-center mt-5'>
              <div className='font-bold justify-center text-sm text-center'>{user.email}</div>
              <button  onClick={logOut} className="rounded-lg mt-2 bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 w-full">
                Cerrar Sesión
              </button>
             </div>}
        </nav>
        <Link to="/cart" className='absolute top-7 right-4'>
          <CartWidget/>
        </Link>
        {user ?
         <UserIcon className='h-8 w-8 text-black absolute top-7 right-14'/> :
         <Link to='/login' >
            <UserCircleIcon className='h-8 w-8 text-black absolute top-7 right-14'/>
          </Link>
        }
      </div>
      {showSearchIdModal && <UserIdModal >
        <OrderSearch searchItem={searchItem} setShowSearchIdModal={setShowSearchIdModal}/>
      </UserIdModal>}
    </header>

  );
};

export default Nav;