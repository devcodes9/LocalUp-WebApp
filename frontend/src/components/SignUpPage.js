import React, { useState } from 'react'

const SignUpPage = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };
    return (
        <div className='w-[80%] h-[100vh] flex opacity-95 m-auto'
        // style={{ backgroundColor: '#1f2937' }}
        >
            <div className='w-[50%] flex m-auto border border-black-800 border-opacity-60 rounded-sm'>
                <div className='w-[45%] h-[60vh] opacity-45' 
                // style={{ backgroundColor: '#E19C00' }}
                style={{ backgroundColor: '#9F0D7F' }}
                >
                    <h1 className='w-[100%] text-white text-4xl text-center'>Sign Up</h1>
                </div>
                <form onSubmit={handleSubmit} className='w-[55%] h-[60vh] m-auto bg-white p-4 flex flex-col justify-center'>

                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " />
                        <label
                            class="peer-focus:font-medium absolute text-sm leading-4 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Name
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " />
                        <label
                            class="peer-focus:font-medium absolute text-sm leading-4 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Email
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " />
                        <label
                            class="peer-focus:font-medium absolute text-sm leading-4 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Password
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            id="contactNumber"
                            name="contactNUmber"
                            value={formData.contactNUmber}
                            onChange={handleChange}
                            required
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " />
                        <label
                            class="peer-focus:font-medium absolute text-sm leading-4 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Contact Number
                        </label>
                    </div>
                    {/* <div className='flex flex-col gap-2 my-3'>
                <label className='block' htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='rounded-xl'
                />
            </div> */}
                    {/* <div className='flex flex-col gap-2 my-3'>
                        <label htmlFor="email" className='block'>Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='rounded-xl'
                            required
                        />
                    </div> */}
                    {/* <div className='flex flex-col gap-2 my-3'>
                        <label htmlFor="password" className='block'>Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className='rounded-xl'
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-2 my-3'>
                        <label htmlFor="contactNumber" className='block'>Phone Number:</label>
                        <input
                            type="tel"
                            id="contactNumber"
                            name="contactNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className='rounded-xl'
                        />
                    </div> */}
                    <div className='flex justify-around'>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Sign Up</button>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Login</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default SignUpPage