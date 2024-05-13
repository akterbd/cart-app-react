import { createContext, useState } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";
export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    updateCartQty: () => {},
});

const ContextProvider = ({children}) => {
    const [cartItem, setCartItem] = useState({
        items: []
    });

    const handleAddToCart = (id) => {
    setCartItem((prevState) => {
        const updatedItems = [...prevState.items];
        const existingCartItem = updatedItems.find(item => item.id === id);
    
        if (existingCartItem) {
        existingCartItem.quantity += 1;
        } else {
        const product = DUMMY_PRODUCTS.find(product => product.id === id);
        updatedItems.push({
            id: id,
            name: product.title,
            price: product.price,
            quantity: 1
        });
        }
        
        return { items: updatedItems };
    });

    };

    const handleUpdateQuentity = (id, amount) => {
    setCartItem((prevState) => {
        const updatedItems = prevState.items.map(item => {

        if (item.id === id) {
            const updatedQuantity = item.quantity + amount;
            return { ...item, quantity: updatedQuantity };
        }

        return item;

        }).filter((item)=> item.quantity > 0);

        return { items: updatedItems };
    });
    };
    const ctxValue = {
        items:cartItem.items,
        addItemToCart: handleAddToCart,
        updateCartQty: handleUpdateQuentity
    }

    return (
        <CartContext.Provider value={ctxValue}>
            {children}
        </CartContext.Provider>
    )
}

export default ContextProvider