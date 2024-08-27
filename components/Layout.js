import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}