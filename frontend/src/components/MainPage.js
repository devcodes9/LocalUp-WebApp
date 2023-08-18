import React from 'react'
import FeatureCard from './FeatureCard'

const MainPage = () => {
    return (

        <div
        className='h-[100vh]' 
        // style={{ background: 'rgb(8,25,39)' }}
        >
            <div className='pt-[5%] w-[75%] m-auto'>
            <div className='pb-[2%] w-[100%] text-center'>
                    <p className=' font-bold text-3xl dark:text-white'>Discover Nearby Gems, Connect Locally!🏬</p>
                    <p className=' pt-[1%] dark:text-gray-200'>Difficulties in finding products? We can help</p>
                </div>
                <form>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Seach Product Name, Company Name, or by Stores" required />
                        <button type="submit" className=" absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
                <div
        className="flex flex-col justify-between md:flex-row mt-[2%] gap-[2%]"
        data-aos="zoom-in-up"
      >
                <FeatureCard title="Convenience at Your Fingertips" body="Say goodbye to the hassle of searching through multiple stores! Our
            user-friendly platform allows you to search for your favorite
            products from the comfort of your home"  />
                <FeatureCard title="Convenience at Your Fingertips" body="Say goodbye to the hassle of searching through multiple stores! Our
            user-friendly platform allows you to search for your favorite
            products from the comfort of your home"  />
                <FeatureCard title="Convenience at Your Fingertips" body="Say goodbye to the hassle of searching through multiple stores! Our
            user-friendly platform allows you to search for your favorite
            products from the comfort of your home"  />
            </div>
            </div>
        </div>


    )
}

export default MainPage