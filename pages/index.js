import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <h1>Zafferano di Sardegna DOP</h1>
      <Hero
                imageSrc="/images/banner2.webp"
                altText="Purissimo Zafferano di Sardegna"
                captionText="Pure Saffron"
            />
    </div>
  )
}