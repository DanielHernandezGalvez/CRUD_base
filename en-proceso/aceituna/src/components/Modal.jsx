import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed m-auto  inset-0 flex items-center justify-center  ">
            <div className="bg-[--gray] opacity-80 absolute inset-0"></div>
            <div className="bg-[--beige-clear] w-[90vw] h-[80vh] monserrat p-12 
                shadow-2xl text-[--brown] font-bold  text-gray-700 rounded-lg z-10 
                overflow-y-auto flex flex-col">
                    <div >
                <button className="mb-8 p-2 bg-[--brown] cursor-pointer monserrat 
                text-white rounded" onClick={onClose}>
                    Volver
                </button>
                </div>
                {children}

            </div>
        </div>
    );
};

export default Modal;