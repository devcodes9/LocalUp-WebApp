import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { BsFillCartFill } from 'react-icons/bs'

const ProductPage = () => {
    return (
        <div class='flex'>
            <div style={{ width: '15%', display: 'flex' }}>
                <Sidebar aria-label="Default sidebar example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                href="#"
                                icon={HiChartPie}
                            >
                                <p>
                                    Dashboard
                                </p>
                            </Sidebar.Item>

                            <Sidebar.Item
                                href="#"
                                icon={BsFillCartFill}
                                label="3"
                            >
                                <p>
                                    Cart
                                </p>
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiUser}
                            >
                                <p>
                                    Profile
                                </p>
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiShoppingBag}
                            >
                                <p>
                                    Products
                                </p>
                            </Sidebar.Item>
                            {/* <Sidebar.Item
                                href="#"
                                icon={HiArrowSmRight}
                            >
                                <p>
                                    Sign In
                                </p>
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiTable}
                            >
                                <p>
                                    Sign Up
                                </p>
                            </Sidebar.Item> */}
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg"
                style={{ paddingLeft: '10px', width: '85%' }}>
                <div class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '10px' }}>Inventory Stats</h1>
                    <div>
                        <div class="flex" style={{ backgroundColor: '#800080b5', width: '20%' }} >
                            <img src="/cart-removebg-preview.png" style={{ width: '70px', height: '70px', margin: '3%' }}></img>
                            <div style={{ width: '80%', margin: '3%' }}>
                                <p style={{ color: 'white', padding: '5%' }}>Total Products:</p>
                                <p style={{ color: 'white', padding: '5%' }}>5</p>
                            </div>
                        </div>
                        {/* <p>Total Store Value</p> */}
                    </div>
                </div>
                <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '10px' }}>Inventory Items</h1>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase dark:text-gray-400"
                        style={{ borderBottom: '1px solid blue', borderTop: '1px solid blue' }}
                    >
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Value
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                1
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>

                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">
                                Laptop PC
                            </td>
                            <td class="px-6 py-4">
                                $1999
                            </td>
                            <td class="px-6 py-4">
                                1
                            </td>
                            <td class="px-6 py-4">
                                $1999
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 16"
                            </th>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                1
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro2
                            </th>
                            <td class="px-6 py-4">
                                Laptop PC
                            </td>
                            <td class="px-6 py-4">
                                $1999
                            </td>
                            <td class="px-6 py-4">
                                1
                            </td>
                            <td class="px-6 py-4">
                                $1999
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 15"
                            </th>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                1
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductPage