import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Spinner from "react-bootstrap/Spinner"
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from './ProductContext'
import { useContext, useState, useEffect} from 'react'
import { Link } from "react-router-dom";
// import './assets/coffee.jpg';
// import './assets/coca-cola.jpg';
// import './assets/chocolatemilkshake.jpg';
// import './assets/pecanpie.jpg';
// import './assets/espresso.jpg';


function Product(props) {

  let params = useParams()
  let navigate = useNavigate()

  let { getProduct, deleteProduct } = useContext(ProductContext)
  let [ product, setProduct ] = useState()

  useEffect(() => { 
    async function fetch() {
        await getProduct(params.productId)
          .then((product) => setProduct(product))
    }
    fetch()
    }, [params.productId]);

  function handleDeleteProduct(id) {
    deleteProduct(id)
    navigate('/products')
  }

  function loading() {
    return <div className="w-25 text-center"><Spinner animation="border" /></div>
  }

  function productCard() {
    let { id, productName, description, price, image} = product
    return (
        <Card className="align-self-start w-25">
        <Link to={`/products/${product.id}`}>
          <Card.Img variant="top" src={image} />
        </Link>
        <Card.Body>
            <Card.Title>{productName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
            <Card.Text> 
            <strong>Price:</strong> <span>{price}</span>
            </Card.Text>
            <Link to={`/products/${id}/edit`} className="btn btn-primary mx-3">Edit</Link>
            <Button variant="danger" onClick={handleDeleteProduct.bind(this, id)}>Delete</Button>
        </Card.Body>
        </Card>
    )
  }
  if (product === undefined) return loading()
    return product.id !== parseInt(params.productId) ?  loading() : productCard()

}

export default Product