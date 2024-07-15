import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import ProductList from './ProductList'
import Product from './Product'
import ProductForm from './ProductForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<h1>Welcome</h1>}/>
          <Route path="products" element={<ProductList />} >
            <Route index element={<p>Select a product for more details</p>}/>
            <Route path="new" element={<ProductForm />} />
            <Route path=":productId/edit" element={<ProductForm />} />
            <Route path=":productId" element={<Product />} />
            <Route path="*" element={<h1>Product Not Found</h1>} />
          </Route>
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App