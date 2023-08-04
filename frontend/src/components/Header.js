'use client';
import { Button, Navbar } from 'flowbite-react';
import React from 'react';

const Header = () => {
  return (
    <Navbar
      fluid
      rounded
      style={{ backgroundColor: 'rgb(8,25,39)' }}
      className='rounded-none'
    >
      <Navbar.Brand

        href="/"
      >
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/logo.png"
        />
        <span className="self-center whitespace-nowrap text-xl text-white font-semibold dark:text-white">
          Local WebApp
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {/* <Navbar.Link href="#" className='text-white h-[100%] flex items-center'>
          Contact
        </Navbar.Link> */}
        <Navbar.Link href="/signup" className='text-white'>
          <Button>Register</Button>
        </Navbar.Link>
        <Navbar.Link href="/signup" className='text-white'>
          <Button>Login</Button>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header