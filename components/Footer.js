import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const phoneNumber = '390791234567'; // Remove the '+' and any spaces
  const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <footer>
          <p>&copy; 2024 Zafferano di Sardegna - Porto Torres. Tutti i diritti riservati.</p>
          <p><a href="mailto:info@zafferanosardegnadop.it">info@zafferanosardegnadop.it</a></p>
            <p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp style={{ marginLeft: '5px', fontSize: '1.2em', verticalAlign: 'middle' }} />
                    &nbsp; +{phoneNumber}
                </a>
            </p>
        </footer>
    )
  }