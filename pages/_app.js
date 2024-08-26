import '../styles/globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from '../components/Layout'
import { CartProvider } from '../context/CartContext'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function MyApp({ Component, pageProps }) {
  return (
    <PayPalScriptProvider options={{ "client-id": "AVCGQdn61GidSSD5HAEYREv2q6S9JfwHyKT0G0XLV0OUBmhC8i8aAQqARFmmCwj_O2Ss8qQ75uHOZqkz" }}>
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