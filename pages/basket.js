import { useCart } from '../context/CartContext'
import Link from 'next/link'
import { PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from 'react-toastify';

export default function Basket() {
  const { cart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total.toFixed(2),
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      toast.success(`Transazione completata da ${details.payer.name.given_name}`);
      clearCart();
    });
  };

  return (
    <div className="basket">
      <h1>Il Tuo Carrello</h1>
      {cart.length === 0 ? (
        <p>Il tuo carrello è vuoto.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - €{item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p>Totale: €{total.toFixed(2)}</p>
          <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove}
          />
        </>
      )}
      <Link href="/">
        <button>Continua lo Shopping</button>
      </Link>
    </div>
  )
}