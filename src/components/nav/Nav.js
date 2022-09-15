import React from 'react'
import { Navbar } from 'flowbite-react'
import logo from "../../assets/logo-redondo.png"
import CartWidget from '../CartWidget/CartWidget'

const Nav = () => {
  return (
<Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="">
    <img
      src={logo}
      className="mr-3 h-6 sm:h-9"
      alt="Fajada Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Fajada
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    
    <CartWidget/>
    
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Fajas
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Leggins
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Tops
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Buzos
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Enterizos
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
  )
}

export default Nav