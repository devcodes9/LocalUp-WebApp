import React from 'react'

const MainPage = () => {
    return (

        <div
        // className='h-[100vh]' 
        // style={{ background: 'rgb(8,25,39)' }}
        >
            <div className='pt-[5%] w-[75%] m-auto'>
                <form>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                        <button type="submit" class=" absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
                <div className='pt-[4%] w-[100%] text-center'>
                    <p className=' font-bold text-3xl'>Discover Nearby Gems, Connect Locally!</p>
                    <p className=' pt-[1%]'>Find difficulties in finding products? We can help</p>
                </div>

                <div className='flex flex-col justify-between md:flex-row mt-[2%]' data-aos="zoom-in-up">
                    <div className='basis-[30%] bg-pink-200 rounded-2xl mb-5 p-6 transition duration-500 box-border' >
                        <p className='font-bold'>Convenience at Your Fingertips</p>
                        <p>Say goodbye to the hassle of searching through multiple stores! Our user-friendly platform allows you to search for your favorite products from the comfort of your home</p>
                    </div>
                    <div className='basis-[30%] bg-pink-200 rounded-2xl mb-5 p-6 transition duration-500 box-border' >
                        <p className='font-bold'>Convenience at Your Fingertips</p>
                        <p>Say goodbye to the hassle of searching through multiple stores! Our user-friendly platform allows you to search for your favorite products from the comfort of your home</p>
                    </div>
                    <div className='basis-[30%] bg-pink-200 rounded-2xl mb-5 p-6 transition duration-500 box-border' >
                        <p className='font-bold'>Convenience at Your Fingertips</p>
                        <p>Say goodbye to the hassle of searching through multiple stores! Our user-friendly platform allows you to search for your favorite products from the comfort of your home</p>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default MainPage