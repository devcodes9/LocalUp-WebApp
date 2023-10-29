import React from 'react'

const StoreInvoices = () => {
    return (
        <div style={{minHeight:'100%' , background:'rgb(63 131 248 / 21%)'}}>
            <div style={{ width: '95%', margin: 'auto' }}>
                <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '10px' }}>Store Invoices</h1>
                <table style={{ border: '2px solid black', borderRadius: '10%', }} class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead
                        class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-800 uppercase dark:text-gray-400"
                        style={{ borderBottom: '1px solid black', borderTop: '1px solid black' }}
                    >
                        <tr>
                            <th scope="col" class="px-6 py-3" style={{borderRight:"1px solid #8080804a"}}>
                                Customer Name
                            </th>
                            <th scope="col" class="px-6 py-3" style={{borderRight:"1px solid #8080804a"}}>
                                Contanct Number
                            </th>
                            <th scope="col" class="px-6 py-3" style={{borderRight:"1px solid #8080804a"}}>
                                Total Billing Value
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Invoice Link
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            style={{borderRight:"1px solid #8080804a"}}>
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4" style={{borderRight:"1px solid #8080804a"}}>
                                9012345678
                            </td>
                            <td class="px-6 py-4" style={{borderRight:"1px solid #8080804a"}}>
                                $2999
                            </td>
                            <td class="px-6 py-4" style={{borderRight:"1px solid #8080804a"}}>
                                <a href="https://www.google.com/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Invoice</a>
                            </td>

                        </tr>
                        <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            style={{borderRight:"1px solid #8080804a"}}>
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4" style={{borderRight:"1px solid #8080804a"}}>
                                9012345678
                            </td>
                            <td class="px-6 py-4" style={{borderRight:"1px solid #8080804a"}}>
                                $2999
                            </td>
                            <td class="px-6 py-4" style={{borderRight:"1px solid #8080804a"}}>
                                <a href="https://www.google.com/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Invoice</a>
                            </td>

                        </tr>
                        <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            style={{borderRight:"1px solid #8080804a"}}>
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4" style={{borderRight:"1px solid #8080804a"}}>
                                9012345678
                            </td>
                            <td class="px-6 py-4" style={{borderRight:"1px solid #8080804a"}}>
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                <a href="https://www.google.com/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Invoice</a>
                            </td>

                        </tr>
                        <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            style={{borderRight:"1px solid #8080804a"}}>
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4" style={{borderRight:"1px solid #8080804a"}}>
                                9012345678
                            </td>
                            <td class="px-6 py-4" style={{borderRight:"1px solid #8080804a"}}>
                                $2999
                            </td>
                            <td class="px-6 py-4" style={{borderRight:"1px solid #8080804a"}}>
                                <a href="https://www.google.com/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Invoice</a>
                            </td>

                        </tr>


                        <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            style={{borderRight:"1px solid #8080804a"}}>
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4" style={{borderRight:"1px solid #8080804a"}}>
                                9012345678
                            </td>
                            <td class="px-6 py-4" style={{borderRight:"1px solid #8080804a"}}>
                                $2999
                            </td>
                            <td class="px-6 py-4">
                                <a href="https://www.google.com/" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Invoice</a>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StoreInvoices