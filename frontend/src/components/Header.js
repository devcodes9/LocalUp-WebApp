"use client";
import { Button, Navbar, DarkThemeToggle } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dropdown } from 'flowbite-react';
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import toast from 'react-hot-toast'

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation()

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
      toast.success("Logged out")
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  }
  return (
    <Navbar
      fluid
      rounded
      style={{ backgroundColor: "rgb(8,25,39)" }}
      className="rounded-none sticky top-0"
    >
      <Navbar.Brand href="/">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="https://github.com/devcodes9/LocalUp-WebApp/assets/81856196/5727f22a-b313-448c-827f-656709622a2f"
        />
        <span className="self-center whitespace-nowrap text-xl text-white font-semibold dark:text-white">
          LocalUp
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {/* <Navbar.Link href="#" className='text-white h-[100%] flex items-center'>
          Contact
        </Navbar.Link> */}
        <DarkThemeToggle />
        {userInfo ? (
          <>
          <Dropdown label={userInfo?.existingUser?.name} dismissOnClick={false}>
          <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
          </Dropdown>
          </>
        ) : (
          <>
            <Link to="/signup" className="text-white">
              <Button className="">Register</Button>
            </Link>
            <Link to="/login" className="text-white">
              <Button className="">Login</Button>
            </Link>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
