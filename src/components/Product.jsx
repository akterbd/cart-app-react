import React, { useContext } from 'react'
import { CartContext } from '../store/context-cart';

const Product = ({id, image, title, price, description}) => {
  const {items, addItemToCart, updateCartQty} = useContext(CartContext);
  const itemIndex = items.findIndex(item => item.id === id);
  const isInCart = items.some(item => item.id === id);
  return (
    <div className="h-full dark:bg-gray-800 rounded-md p-3 flex flex-col">
        <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={image} />
        </a>
        <h2 className="dark:text-gray-100 title-font text-lg font-medium mt-3">{title}</h2>
        <p className="text-sm text-gray-400 my-3">{description}</p>
        <div className="mt-auto flex justify-between items-center ">
            <p>${price}</p>
            {isInCart && 
                <div className="flex gap-2 dark:bg-gray-900 p-2 rounded-md">
                    <button className="w-6 h-6 flex items-center justify-center dark:bg-blue-600 text-md dark:text-white rounded-full" onClick={() => updateCartQty(id, -1)}>
                        <span className="relative -top-0.5">-</span>
                    </button>
                    <span>{items[itemIndex].quantity}</span>
                    <button className="w-6 h-6 flex items-center justify-center dark:bg-blue-600 text-md dark:text-white rounded-full" onClick={() => updateCartQty(id, 1)}>
                        <span className="relative -top-0.5">+</span>
                    </button>
                </div>
            }
            {!isInCart && <button onClick={() => addItemToCart(id)} className="py-2 px-3 dark:bg-blue-600 rounded-md">Add To Cart</button>}
        </div>
    </div>
  )
}

export default Product