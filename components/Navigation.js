import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Prodotti</Link></li>
        <li><Link href="/about">Chi Siamo</Link></li>
        <li><Link href="/contact">Contatti</Link></li>
      </ul>
    </nav>
  )
}