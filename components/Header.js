import Link from 'next/link'
import Image from 'next/image'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../context/CartContext'

export default function Header() {
  const { cart } = useCart()

  return (
    <header>
      <div className="header-content">
        <div className="logo-container">
          <Link href="/" className="logo-link">
            <Image src="/logo.png" alt="Zafferano di Sardegna DOP" width={200} height={150} />
            {/* <h1>Zafferano Vero</h1> */}
            <Image src="/zaff-med.png" alt="Zafferano Mediterraneo" width={200} height={60} />
          </Link>
        </div>
        <Link href="/basket" className="cart-icon">
          <FaShoppingCart size={24} />
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
      </div>
    </header>
  )
}