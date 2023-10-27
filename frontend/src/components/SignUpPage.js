import React, { useState, useEffect } from "react";
import { ToggleSwitch, Button } from "flowbite-react";
import { Link } from 'react-router-dom'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useSendOTPMutation } from "../slices/usersApiSlice";
import { setRegisterData } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import Loader from "../components/Loader";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(false);
  const [otp, setOtp] = useState("");
  const handleToggleChange = () => {
    setIsToggled(!isToggled);
  };
  const [sendOTP, { isLoading }] = useSendOTPMutation();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    } 
  }, [navigate, userInfo]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(formData);

    try{
      // const config = {
      //   headers: {
      //     "Content-type":"application/json"
      //   }
      // }
      // console.log(formData);
      // const {data} = await axios.post(
      //   "http://localhost:8080/api/v1/sendotp",
        
      //     {
      //       "email": formData.email
      //     }
      //   ,
      //   config
      //   );
      const email = formData?.email;
      const res = await sendOTP({ email }).unwrap();
      formData.role = isToggled ? 'store-owner' : 'buyer';
      dispatch(setRegisterData({...formData }));
      navigate("/sendOTP")
      toast.success("OTP sent successfully")
    }

    catch(error){
      toast.error(error?.data?.message || error.error);
    }
  };
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://github.com/devcodes9/LocalUp-WebApp/assets/81856196/5727f22a-b313-448c-827f-656709622a2f"
              alt="logo"
            />
            LocalUp
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Full Name"
                    value={formData.name} 
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    value={formData.email} // Bind the value to formData.name
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    for="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    value={formData.phoneNumber} 
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={formData.password} // Bind the value to formData.name
                    onChange={handleChange}
                    required
                  />
                </div>
                <ToggleSwitch
                  label="I am a Store Owner"
                  checked={isToggled}
                  onChange={handleToggleChange} 
                />
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      for="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                {isLoading && <div className= 'text-center'><Loader /></div>}
                <Button
                  type="submit"
                  className="w-full text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 "
                >
                  Create an account
                </Button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
