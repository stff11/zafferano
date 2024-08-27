import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from '../components/Layout'
import { CartProvider } from '../context/CartContext'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function MyApp({ Component, pageProps }) {
  return (
    <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </CartProvider>
    </PayPalScriptProvider>
  )
}

export default MyApp