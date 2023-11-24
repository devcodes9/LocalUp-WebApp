import React, { useEffect, useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiShoppingBag, HiUser } from 'react-icons/hi';
import { BsEye } from 'react-icons/bs';
import { MdDeleteOutline } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import './productPage.css';
import Axios from 'axios';
import { useSelector } from 'react-redux';

const InventoryPage = () => {
  const [productDetails, setProductDetails] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
    manufacturer:'',
  });

  const [product, setProduct] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null); 

  const { userInfo } = useSelector((state) => state.auth);
  // console.log("User dat:", userInfo);

  const handleProductDetailsChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddProduct = async () => {
    // setProducts((prevProducts) => [...prevProducts, productDetails]);

    const requestBody = {
      name: productDetails.name,
      category: productDetails.category,
      price: productDetails.price,
      quantity: productDetails.quantity,
      manufacturer: productDetails.manufacturer,
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

    try {
      const response = await Axios.post("http://localhost:8080/api/v1/product/createproduct", requestBody, { withCredentials: true });
  
      if (response.status === 200) {
        setProduct((prevProduct) => [...prevProduct, productDetails]);
        setProductDetails({
          name: '',
          category: '',
          price: '',
          quantity: '',
          manufacturer: '',
        });
        console.log('Product added successfully to the backend:', response.data);
      } else {
        console.error('Failed to add the product to the backend:', response.data);
      }
    } catch (error) {
      console.error('An error occurred while adding the product:', error);
    }
  };

  useEffect(() => {
    
    Axios.get(`http://localhost:8080/api/v1/store/products/${userInfo.existingUser._id}`, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          setProduct(response.data.data);
        } else {
          console.error('Failed to fetch product data from the backend:', response.data.message);
        }
      })
      .catch((error) => {
        console.error('An error occurred while fetching product data:', error);
      });
  }, []); 

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await Axios.delete(`http://localhost:8080/api/v1/product/${productId}`, { withCredentials: true });
  
      if (response.status === 200) {
        const updatedProducts = product.filter((p) => p._id !== productId);
        setProduct(updatedProducts);
        console.log('Product deleted successfully:', response.data);
      } else {
        console.error('Failed to delete the product:', response.data);
      }
    } catch (error) {
      console.error('An error occurred while deleting the product:', error);
    }
  };
  
const handleEditProduct = (product) => {
    setProductToEdit(product);
    setProductDetails(product); 
  };

  const handleUpdateProduct = async () => {
    
    const requestBody = {
      name: productDetails.name,
      category: productDetails.category,
      price: productDetails.price,
      quantity: productDetails.quantity,
      manufacturer: productDetails.manufacturer,
    };

    try {
      const response = await Axios.put( 
        `http://localhost:8080/api/v1/product/${productToEdit._id}`,requestBody,{ withCredentials: true });

      if (response.status === 200) {

        const updatedProduct = { ...productToEdit, ...productDetails };
        const updatedProducts = product.map((p) =>
          p._id === productToEdit._id ? updatedProduct : p
        );
        setProduct(updatedProducts);
        setProductDetails({
          name: '',
          category: '',
          price: '',
          quantity: '',
          manufacturer: '',
        });
        setProductToEdit(null); 
        console.log('Product updated successfully:', response.data);
      } else {
        console.error('Failed to update the product:', response.data);
      }
    } catch (error) {
      console.error('An error occurred while updating the product:', error);
    }
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
                <p>Invoices</p>
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
                <p style={{ color: 'white', padding: '5%' }}>{product.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-4">
        <p>If you want to {productToEdit ? 'update' : 'add'} new product, fill the below fields and click on {productToEdit ? 'update' : 'add'} button:</p>
          {/* <h2>Add Product</h2> */}
          <div className="flex">
            <input
              type="text"
              name="name"
              value={productDetails.name}
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
            <input
              type="text"
              name="manufacturer"
              value={productDetails.manufacturer}
              onChange={handleProductDetailsChange}
              placeholder="Manufacturer"
            />
            {/* <button style={{marginLeft:'10px'}} onClick={handleAddProduct}>Add</button> */}
            <button style={{ marginLeft: '10px' }} onClick={productToEdit ? handleUpdateProduct : handleAddProduct}>
              {productToEdit ? 'Update' : 'Add'}
            </button>
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
                Manufacturer
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {product.map((product, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800 dark:border-gray-700' : 'bg-white border-b dark:bg-gray-900 dark:border-gray-700'}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.name}
                </th>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.quantity}</td>
                <td className="px-6 py-4">{product.price * product.quantity}</td>
                <td className="px-6 py-4">{product.manufacturer}</td>
                <td className="px-6 py-4 flex">
                  {/* <BsEye style={{ color: 'rgba(128, 0, 128, 0.71)', fontSize: '18px' }} /> */}
                  <BiEdit 
                  style={{ color: 'green', fontSize: '22px', cursor: 'pointer' }}
                  onClick={() => handleEditProduct(product)}  />
                  <MdDeleteOutline 
                  style={{ color: 'red', fontSize: '22px', cursor: 'pointer' }}
                  onClick={() => handleDeleteProduct(product._id)}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default InventoryPage;
