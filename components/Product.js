import { useCart } from '../context/CartContext'
import { toast } from 'react-toastify'

export default function Product({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    toast.success(`${product.name} aggiunto al carrello!`)
  }

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>€{product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Aggiungi al Carrello</button>
    </div>
  )
}