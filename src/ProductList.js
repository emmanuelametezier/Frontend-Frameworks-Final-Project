import React, { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from 'react-router-dom'
import { ProductContext } from './ProductContext'
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios"

function ProductList(props) {

  const [products, setProducts] = useState([])

  function productList(products) {
    if (products === null) return
    return products.map((product) =>
      <ListGroup.Item key={product.id}>
        <Link to={`/products/${product.id}`} key={product.id} >
          {product.productName}
        </Link>
      </ListGroup.Item>
    )
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

  function SortByPrice() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Sort By Price
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={sortProductsDesc.bind(this, products)}>Price High to Low</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={sortProductsAsc.bind(this, products)}>Price Low to High</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
 

  return (
    <>
    <h1>Products</h1>
    <SortByPrice />
    <Stack direction="horizontal" gap={3}>
    <ListGroup className="align-self-start w-75">
    <ProductContext.Consumer> 
      {({products}) => (
        productList(products)
      )}
    </ProductContext.Consumer>
    </ListGroup>
    <Outlet />
    </Stack>
    </>
  )
}

export default ProductList