import { useContext } from "react";
import { CartContext } from "../store/context-cart";
const Cart = () => {
  const {items, updateCartQty} = useContext(CartContext);
  const totalPrice = items.reduce((acc, item) => (acc + item.price * item.quantity), 0);
  const formattedTotalPrice = totalPrice.toFixed(2);
  return (
    <div className="pb-12">
        <ul>
            {items.length === 0 &&   <p>No items in cart!</p>}
            {items.length > 0 && items.map((item) => 
                    <li className="my-2 border-b p-2 bg-gray-200 rounded-md text-sm flex items-center justify-between" key={item.id}>
                        <div>
                            {item.name}(${item.price})
                        </div>
                        <div className="flex gap-2">
                            <button className="w-6 h-6 flex items-center justify-center dark:bg-blue-600 text-md dark:text-white rounded-full" onClick={() => updateCartQty(item.id, -1)}>
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button className="w-6 h-6 flex items-center justify-center dark:bg-blue-600 text-md dark:text-white rounded-full" onClick={() => updateCartQty(item.id, 1)}>
                                +
                            </button>
                        </div>
                    </li>
                ) }
        </ul>
        <p className="mt-3 text-right">
            Cart Total: <strong>{formattedTotalPrice}</strong>
        </p>
    </div>
  )
}

export default Cart