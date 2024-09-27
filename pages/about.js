// import Hero from '../components/Hero';
// export default function About() {
//     return (
//         <section id="about">
//             <h2>Chi Siamo</h2>
//             <p>Siamo una piccola azienda agricola situata a Porto Torres, in Sardegna. Da generazioni, la nostra famiglia si dedica alla coltivazione dello zafferano, seguendo le antiche tradizioni e rispettando rigorosamente i disciplinari del marchio DOP (Denominazione di Origine Protetta).</p>
//             <p>Il nostro Zafferano di Sardegna DOP è rinomato per la sua purezza e il suo aroma intenso, frutto della passione e della cura che mettiamo in ogni fase della produzione, dalla coltivazione alla raccolta, fino al confezionamento.</p>
//             <Hero
//                 imageSrc="/images/campagna.webp"
//                 altText="Purissimo Zafferano di Sardegna"
//                 captionText="Zafferano Mediterraneo"
//             />
//          </section>
//     )
// }

// /pages/About.js
import Hero from '../components/Hero';
import { FaSeedling, FaHandHoldingHeart, FaAward } from 'react-icons/fa';

export default function About() {
    return (
        <>
            {/* About content section */}
            <section id="about" className="section">
                <h2>Chi Siamo</h2>
                <p>
                    Siamo una piccola azienda agricola situata a Porto Torres, in Sardegna. Da generazioni, la nostra
                    famiglia si dedica alla coltivazione dello zafferano, seguendo le antiche tradizioni.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                    {/* Icons to visualize core values */}
                    <div>
                        <FaSeedling style={{ fontSize: '2rem', color: 'var(--secondary-color)' }} />
                        <h3 className="inline10">Coltivazione Naturale</h3>
                        <p>Usiamo metodi sostenibili, senza pesticidi, per garantire un prodotto di qualità.</p>
                    </div>
                    <div>
                        <FaHandHoldingHeart style={{ fontSize: '2rem', color: 'var(--secondary-color)' }} />
                        <h3 className="inline10">Passione e Cura</h3>
                        <p>Mettiamo cuore e dedizione in ogni fase, dalla semina alla raccolta.</p>
                    </div>
                    <div>
                        <FaAward style={{ fontSize: '2rem', color: 'var(--secondary-color)' }} />
                        <h3 className="inline10">Qualità Certificata</h3>
                        <p>Il nostro Zafferano è rinomato per la sua purezza e l'aroma intenso.</p>
                    </div>
                </div>
            </section>
            {/* Hero section with a saffron field background */}
            <Hero
                imageSrc="/images/campagna.webp"
                altText="Purissimo Zafferano di Sardegna"
                // captionText=""
            />
        </>
    );
}
