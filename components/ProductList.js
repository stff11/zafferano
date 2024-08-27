import Product from './Product'

const products = [
  { id: 1, name: '0.1g', price: 10.00, image: '/images/products/0.1g.webp' },
  { id: 2, name: '1g', price: 80.00, image: '/images/products/pure.webp' },
  { id: 3, name: '5g', price: 350.00, image: '/images/products/5g.webp' },
  { id: 4, name: '100g (Ingrosso)', price: 6000.00, image: '/images/products/100g.webp' },
]

export default function ProductList() {
  return (
    <div className="products">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}