import Hero from '../components/Hero';

export default function Home() {
  console.log("Rendering Home component");
  return (
    <div>
      <h1>Zafferano di Sardegna DOP</h1>
      {console.log("About to render Hero")}
      <Hero
        imageSrc="https://zafferano.netlify.app/images/banner2.webp"
        altText="Purissimo Zafferano di Sardegna"
        captionText="Pure Saffron"
      />
      {console.log("Hero rendered")}
    </div>
  )
}