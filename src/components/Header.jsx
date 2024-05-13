import React, { useContext, useRef } from 'react'
import CartModal from './CartModal'
import { CartContext } from '../store/context-cart'

const Header = () => {
    const {items} = useContext(CartContext);
    const modal = useRef();
    const handleCartOpenModal = () => {
        modal.current.open();
    }
    let modalActions = <button>Close</button>;

    if (items.length > 0) {
        modalActions = (
        <>
            <button>Close</button>
            <button className="dark:bg-gray-900 py-2 px-4 rounded-md dark:hover:bg-gray-950 ms-3 text-white">Checkout</button>
        </>
        );
    }
    return (
        <>
            <CartModal title="Cart Details" ref={modal} actions={modalActions} />
            <header className="dark:text-gray-100 body-font">
                <div className="flex flex-wrap py-5 flex-col md:flex-row items-center justify-between">
                    <a className="flex title-font font-medium items-center mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl">eSellMart</span>
                    </a>
                    <button className="inline-flex items-center py-1 px-3 focus:outline-nonemt-4 md:mt-0 relative" onClick={handleCartOpenModal}>
                        <span> Cart</span>
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                        </svg>
                        <span className="flex absolute top-0 end-0">
                            <span className="animate-ping absolute inline-flex size-full rounded-full bg-blue-300 opacity-75 dark:bg-blue-700"></span>
                            <span className="relative inline-flex text-xs bg-blue-600 text-white rounded-full py-0.5 px-1.5">
                            {items.length}
                            </span>
                        </span>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header