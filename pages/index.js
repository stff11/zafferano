import Hero from '../components/Hero';

export default function Home() {
  console.log("Rendering Home component");
  return (
    <div>
      <h1>Zafferano di Sardegna DOP</h1>
      <div className="hero">
          <img
              src="https://zafferano.netlify.app/images/banner2.webp"
              alt="pure saffron"
          />
          <div className="caption">
              <h1 className="title">Pure Saffron</h1>
          </div>
      </div>
    </div>
  )
}