import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const WhatsAppFloatBtn = () => {
    return (
        <a>
            <FontAwesomeIcon icon={faWhatsapp} className='bg-gray-800 rounded-full p-1 text-white' />

        </a>
    )
}

export default WhatsAppFloatBtn
