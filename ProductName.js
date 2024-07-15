import { useEffect, useState } from 'react';
import axios from 'axios'

function ProductName() {
  let [productName, setproductName] = useState("unknown")

  useEffect(() => {
    async function getproductName() {
      const response = await axios.get("http://localhost:3001/products/1")
      setproductName(response.data.name)
    }
    getproductName()
  }, [])

  return (
    <p>Product Name: {productName}</p>
  )
}

export default ProductName;