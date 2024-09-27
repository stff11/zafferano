// import { FaWhatsapp } from 'react-icons/fa';
// import Hero from '../components/Hero';

// export default function Contact() {
//     const phoneNumber = '390791234567'; // Remove the '+' and any spaces
//     const whatsappLink = `https://wa.me/${phoneNumber}`;

//     return (
//         <section id="contact">
//             <h2>Contatti</h2>
//             <p>Per qualsiasi informazione o per effettuare un ordine, non esitate a contattarci:</p>
//             <p>Email: <a href="mailto:info@zafferanosardegnadop.it">info@zafferanosardegnadop.it</a></p>
//             <p>
//                 <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
//                     <FaWhatsapp style={{ marginLeft: '5px', fontSize: '1.2em', verticalAlign: 'middle' }} />
//                     &nbsp; +{phoneNumber}
//                 </a>
//             </p>
//             <p>Indirizzo: Via dello Zafferano 123, 07046 Porto Torres (SS), Sardegna, Italia</p>
//             <Hero
//                 imageSrc="/images/banner1.webp"
//                 altText="Purissimo Zafferano di Sardegna"
//                 captionText="Pure Saffron"
//             />
//         </section>
//     )
// }

// /pages/Contact.js
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Hero from '../components/Hero';

export default function Contact() {
    const phoneNumber = '390791234567';
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <>
            {/* Contact content section */}
            <section id="contact" className="section">
                <h2>Contatti</h2>
                <p>Per qualsiasi informazione o per effettuare un ordine, non esitate a contattarci:</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li>
                        <FaEnvelope style={{ color: 'var(--secondary-color)', marginRight: '0.5rem' }} />
                        <a href="mailto:info@zafferanosardegnadop.it">info@zafferanosardegnadop.it</a>
                    </li>
                    <li>
                        <FaWhatsapp style={{ color: 'var(--secondary-color)', marginRight: '0.5rem' }} />
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">+{phoneNumber}</a>
                    </li>
                    <li>
                        <FaMapMarkerAlt style={{ color: 'var(--secondary-color)', marginRight: '0.5rem' }} />
                        Indirizzo: Via dello Zafferano 123, 07046 Porto Torres (SS), Sardegna, Italia
                    </li>
                </ul>
            </section>
            {/* Hero section with a saffron flower background */}
            <Hero
              imageSrc="/images/banner1.webp"
              altText="Purissimo Zafferano di Sardegna"
              captionText="Pure Saffron"
            />
        </>
    );
}
