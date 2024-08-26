import Product from './Product'

const products = [
  { id: 1, name: 'Zafferano di Sardegna DOP 0.1g', price: 10.00, image: '/images/zafferano-portrait.jpg' },
  { id: 2, name: 'Zafferano di Sardegna DOP 1g', price: 80.00, image: '/images/zafferano3.jpg' },
  { id: 3, name: 'Zafferano di Sardegna DOP 5g (Anfora)', price: 350.00, image: '/images/anfora.jpg' },
  { id: 4, name: 'Zafferano di Sardegna DOP 100g (Ingrosso)', price: 6000.00, image: '/images/zafferano2.jpg' },
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