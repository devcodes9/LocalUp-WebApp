import React from 'react'
import { useLocation } from 'react-router-dom';

const ProductPage = (props) => {
  
  // console.log('ProductPage props:', props);

  const location = useLocation();
  const searchData = location.state?.searchData || []; // Use an empty array as a default value
        
  // console.log('searchData:', searchData);

  return (
    <div className="flex flex-wrap justify-center">
      {searchData.data.map((item) => (
        <div key={item.id} className="card shadow-lg rounded-md p-4 w-1/4 mx-8 my-8">
        <div className="text-center">
          <p className="text-xl font-semibold mb-2">{item.name}</p>
          <p className="text-gray-500 mb-2">Category: {item.category}</p>
          <p className="text-blue-700 font-bold mb-2">Price: {item.price}</p>
          {/* <p className="text-gray-700 mb-2">Stores: Chaitanya Sheth, Dev Dalia</p>/ */}
          {/* <p className="text-gray-500 mb-4">Total Available Quantity: </p> */}
          <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-300">
            Add to Cart
          </button>
        </div>
      </div>
      ))}
    </div>

  );
}

export default ProductPage