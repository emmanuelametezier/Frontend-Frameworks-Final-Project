import React, { createContext, useState, useEffect } from "react"
import axios from "axios"

export const ProductContext = createContext()

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([])
  const url = "http://localhost:3001/products"

  useEffect(() => {
    async function getProducts() {
      await refreshProducts()
    }
    getProducts()
  }, []);

  function refreshProducts() {
    return axios.get("http://localhost:3001/products")
      .then(response => {
        setProducts(response.data)
      })
  }

  function getProduct(id) {
    return axios.get(`http://localhost:3001/products/${id}`)
    .then(response =>
      new Promise((resolve) => resolve(response.data))
    )
    .catch((error) =>
        new Promise((_, reject) => reject(error.response.statusText))
      )
  }

  function deleteProduct(id) {
    axios.delete(`http://localhost:3001/products/${id}`)
    .then(refreshProducts)
  }

  function addProduct(product) {
    return axios.post("http://localhost:3001/products", product)
  .then(response => {
    refreshProducts()
    return new Promise((resolve) => resolve(response.data))
  })
  }

  function updateProduct(product) {
    return axios.put(`http://localhost:3001/products/${product.id}`, product)
  .then(response => {
    refreshProducts()
    return new Promise((resolve) => resolve(response.data))
  })
  }

  function filterProducts(param) {
   return axios.get(`${url}/?q=${param}`).then((response) => {
     return new Promise((resolve) => resolve(response.data));
});
}

  function sortProductsAsc() {
    return axios.get("http://localhost:3001/products/?_sort=price&_order=asc")
      .then(response => {
        setProducts(response.data)
      })
  }

  function sortProductsDesc() {
    return axios.get("http://localhost:3001/products/?_sort=price&_order=desc, asc")
      .then(response => {
        setProducts(response.data)
      })
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        getProduct,
        deleteProduct,
        addProduct,
        updateProduct,
        filterProducts,
        sortProductsAsc,
        sortProductsDesc
      }}
    >
      {props.children}
    </ProductContext.Provider>
  )
}