import React, {useState, useEffect} from 'react';
import image1 from "../assets/images/imagenes-07.png"
import image2 from "../assets/images/imagenes-08.png"
import image3 from "../assets/images/imagenes-11.png"
import image4 from "../assets/images/imagenes-19.png"
import image5 from "../assets/images/imagenes-23.png"

const Modal = ({ isOpen, onClose, children }) => {
    const [localImages, setLocalImages] = useState([image1, image2, image3, image4, image5]);
    const [randomIndex, setRandomIndex] = useState(null);

    const getRandomIndex = () => {
        return Math.floor(Math.random() * localImages.length);
    };

    useEffect(() => {
        let newIndex;

        if (isOpen && randomIndex === null) {
            // La primera vez que se abre el modal, elige un índice aleatorio
            newIndex = getRandomIndex();
            setRandomIndex(newIndex);
        } else if (!isOpen) {
            // Resetea el índice cuando el modal se cierra
            setRandomIndex(null);
        }
    }, [isOpen, randomIndex, localImages]);

    if (!isOpen || randomIndex === null) return null;

    const currentImage = localImages[randomIndex];

    return (
        <div className="fixed m-auto  inset-0 flex items-center justify-center  ">
            <div className="bg-[--gray] opacity-80 absolute inset-0"></div>
            <div className="bg-[--beige-clear] w-[90vw] h-[80vh] monserrat p-12 
                shadow-2xl text-[--brown] font-bold  text-gray-700 rounded-lg z-10 
                overflow-y-auto flex flex-col">
                    <div>
                <button className="mb-8 p-2 bg-[--brown] cursor-pointer monserrat 
                text-white rounded" onClick={onClose}>
                    Volver
                </button>
                </div>
                
        <img src={currentImage} alt="Modal" className="mb-4 h-96 object-cover" />
                <h2 className="text-xl font-medium mb-4">{children}</h2>

            </div>
        </div>
    );
};

export default Modal;