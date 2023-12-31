import React, { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import toast from 'react-hot-toast'
import Axios from "axios";
import { getBaseURL } from "../utils/url";

const MainPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState(null); // New state to store search results
  const [searchQuery, setSearchQuery] = useState("");

  const submitHandler = async (e) => {
    
    e.preventDefault();
    try {
      if (!userInfo) {
        navigate('/login');
      } else {
        const url = getBaseURL();
        const response = await Axios.get(`${url}/api/v1/product?query=${searchQuery}`, { withCredentials: true });
  
        const data = response.data; // Access the data directly
        setSearchData(data, () => {
          console.log("searchData: ", searchData);
          navigate('/Product', { state: { searchData: data } });
        });
      }
    } catch (error) {
      console.error('Error in submitHandler:', error);
  
      toast.error(
        error?.data?.message || error.message || 'An error occurred.'
      );
    }
  };
  
  useEffect(() => {
    if (searchData !== null) {
      console.log("searchData: ", searchData);
      navigate('/Product', { state: { searchData } });
    }
  }, [searchData,navigate]);
  return (
    <div
      // className="h-[100vh]"
      // style={{ background: 'rgb(8,25,39)' }}
    >
      <div className="pt-[5%] w-[75%] m-auto">
        <div className="pb-[2%] text-center">
          <div className="flex flex-col items-center justify-center">
            <img
              alt="Logo"
              className="object-contain h-48 w-96"
              src="https://github.com/devcodes9/LocalUp-WebApp/assets/81856196/5727f22a-b313-448c-827f-656709622a2f"
            />
            <p className="font-bold text-3xl dark:text-white pt-5">
              Discover Nearby Gems, Connect Locally!🏬
            </p>
            <p className="pt-[1%] dark:text-gray-200">
              Difficulties in finding products? We can help
            </p>
          </div>
        </div>
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              onChange={(e)=>setSearchQuery(e.target.value)}
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Seach Product Name, Company Name, or by Stores"
              required
            />
            <button
              type="submit"
              onClick={submitHandler}
              className=" absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div
          className="flex flex-col justify-between md:flex-row mt-[2%] gap-[2%]"
          data-aos="zoom-in-up"
        >
          <FeatureCard
            title="Discover. Connect. Shop Local."
            body="It provides convenience of shopping locally through your platform and it also emphasizes that customers can support local businesses without any hassle or complications."
          />
          <FeatureCard
            title="Convenience at Your Fingertips"
            body="Say goodbye to the hassle of searching through multiple stores! Our
            user-friendly platform allows you to search for your favorite
            products from the comfort of your home"
          />
          <FeatureCard
            title="Local Love, Global Impact."
            body=" This idea speaks to the broader implications of supporting local businesses which leads users to contribute to a more sustainable and connected world."
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
