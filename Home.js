import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from "react-router-dom"
import { Image } from 'react-bootstrap'

function Home() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
          <Image src="src\dreams.jpg" alt="Image" width="250" preview="true" />
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/products/new" className="nav-link">New Product</Link>
          </Nav>
        </Container>
      </Navbar>
      <Stack gap={3} className="col-md-10 mx-auto mt-3">
        <Outlet />
      </Stack>
    </>
  )
}

export default Home