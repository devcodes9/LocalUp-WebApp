import React, { useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiShoppingBag, HiUser } from 'react-icons/hi';
import { BsEye } from 'react-icons/bs';
import { MdDeleteOutline } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import './productPage.css';
import Axios from 'axios';

const ProductPage = () => {
  const [productDetails, setProductDetails] = useState({
    productName: '',
    category: '',
    price: '',
    quantity: '',
  });

  const [products, setProducts] = useState([]);

  const handleProductDetailsChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    // setProducts((prevProducts) => [...prevProducts, productDetails]);

    const requestBody = {
      productName: productDetails.productName,
      category: productDetails.category,
      price: productDetails.price,
      quantity: productDetails.quantity,
    };

    Axios.interceptors.request.use(function (config) {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    });
    
    // const token = Cookies.get('yourTokenCookieName'); // Replace with the actual name of your token cookie

    // const headers = {
    //   Authorization: `Bearer ${token}`,
    // };

    Axios.post("http://localhost:8080/api/v1/product/createproduct", requestBody)
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          setProducts((prevProducts) => [...prevProducts, productDetails]);

          setProductDetails({
            productName: '',
            category: '',
            price: '',
            quantity: '',
          });

          console.log('Product added successfully to the backend:', response.data);
        } else {
          console.error('Failed to add the product to the backend:', response.data);
        }
      })
      .catch((error) => {
        console.error('An error occurred while adding the product:', error);
      });
  };

  return (
    <div className="flex">
      <div className="responsive">
        <Sidebar>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                <p>Dashboard</p>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                <p>Add Product</p>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                <p>Profile</p>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg fullWidth">
        <div className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '10px' }}>Inventory Stats</h1>
          <div>
            <div className="flex" style={{ backgroundColor: '#800080b5', width: '20%' }}>
              <img src="/cart-removebg-preview.png" style={{ width: '70px', height: '70px', margin: '3%' }} alt="Product" />
              <div style={{ width: '80%', margin: '3%' }}>
                <p style={{ color: 'white', padding: '5%' }}>Total Products:</p>
                <p style={{ color: 'white', padding: '5%' }}>{products.length}</p>
              </div>
            </div>
          </div>
        </div>
        <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '10px' }}>Inventory Items</h1>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400" style={{ borderBottom: '1px solid blue', borderTop: '1px solid blue' }}>
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Value
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800 dark:border-gray-700' : 'bg-white border-b dark:bg-gray-900 dark:border-gray-700'}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.productName}
                </th>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.quantity}</td>
                <td className="px-6 py-4">{product.price * product.quantity}</td>
                <td className="px-6 py-4 flex">
                  <BsEye style={{ color: 'rgba(128, 0, 128, 0.71)', fontSize: '18px' }} />
                  <BiEdit style={{ color: 'green', fontSize: '18px' }} />
                  <MdDeleteOutline style={{ color: 'red', fontSize: '18px' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="my-4">
          <h2>Add Product</h2>
          <div className="flex">
            <input
              type="text"
              name="productName"
              value={productDetails.productName}
              onChange={handleProductDetailsChange}
              placeholder="Product Name"
            />
            <input
              type="text"
              name="category"
              value={productDetails.category}
              onChange={handleProductDetailsChange}
              placeholder="Category"
            />
            <input
              type="text"
              name="price"
              value={productDetails.price}
              onChange={handleProductDetailsChange}
              placeholder="Price"
            />
            <input
              type="text"
              name="quantity"
              value={productDetails.quantity}
              onChange={handleProductDetailsChange}
              placeholder="Quantity"
            />
            <button onClick={handleAddProduct}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
