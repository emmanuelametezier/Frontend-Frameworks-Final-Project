import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from "react-router-dom"
import dreams from "./assets/dreams.jpg"
import { Image } from 'react-bootstrap'
// import "./mockData.json"
import SearchBar from "./SearchBar"

function Home() {
  return (
    <>
      <Navbar className='me-auto' bg="primary" variant="dark">
        <Container >
          <Image width={75} height={75} src={dreams} />
          <Nav className="justify-content" >
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/products/new" className="nav-link">New Product</Link>
            <br />
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" data={SearchBar} aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0"  type="submit">Search</button>
            </form>
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

// {/* <Image src={("../assets/dreams.jpg")} alt="dreams" width="55" height="70" preview="true" /> */}
// {/* <img src={require('../assets/example.jpg')} alt="Example" /> */}