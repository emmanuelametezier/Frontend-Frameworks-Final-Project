import React from "react";
import Row from "react-bootstrap/Row"
import { useNavigate, Link, Outlet } from "react-router-dom";
import { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack'
import { ProductContext } from './ProductContext'

function HomeProducts() {
  let navigate = useNavigate();
  // taking the deleteProduct function from the Product Context
  let { deleteProduct } = useContext(ProductContext);
  let { id, price, image } = useContext(ProductContext);

  function handleDeleteProduct(id) {
    deleteProduct(id)
    navigate('/products')
  }

  function productList(products) {
    // if products is null then stop the process
    if (products === null) return;

    return products.slice(0, 3).map((product, i) => (
      <Card key={i} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card.Text><strong>{product.price}</strong></Card.Text>
        <Link to={`/products/${product.id}`} className="btn btn-secondary mx-2">View</Link>
        <Link to={`/products/${id}/edit`} className="btn btn-primary mx-2">Edit</Link>
        <Button variant="danger" onClick={handleDeleteProduct.bind(this, product.id)}>Delete</Button>
        </Card.Body>
      </Card>
    ));
  }

  return (
    <>
      <br />
      <h1>Welcome to Dreams Cafe</h1>
      <Stack direction="horizontal" gap={3}>
        <Row id="list-3" className="align-self-center">
          <ProductContext.Consumer>
            {({ products }) => productList(products)}
          </ProductContext.Consumer>
        </Row>
        <Outlet />
      </Stack>
    </>
  );
}
  
  export default HomeProducts

  // width={100} height={100}