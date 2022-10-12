import React, { useContext } from 'react';
import { Modal } from 'flowbite-react';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { CartContext } from '../../context/CartContext';

const CartModal = () => {

    const {show, closeModal} = useContext(CartContext)
  return (
    <React.Fragment>
        <Modal
            show={show}
            size="md"
            popup={true}
            onClose={closeModal}
        >
            <Modal.Header />
            <Modal.Body>
            <div className="text-center">
                <ExclamationCircleIcon className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                No comprar más productos de los disponibles en stock.
                </h3>
                <div className="flex justify-center gap-4">
                <button
                    className="rounded-lg w-full items-center bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                    onClick={closeModal}
                >
                    Listo
                </button>
                </div>
            </div>
            </Modal.Body>
        </Modal>
    </React.Fragment>
  );
};

export default CartModal;
