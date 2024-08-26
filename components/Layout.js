import Header from './Header'
import Navigation from './Navigation'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navigation />
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 Zafferano di Sardegna DOP - Porto Torres. Tutti i diritti riservati.</p>
      </footer>
    </>
  )
}