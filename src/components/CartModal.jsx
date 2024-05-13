import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"
import Cart from "./Cart";

const CartModal = forwardRef(({title, actions}, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog id="modal" ref={dialog} className="dark:backdrop:bg-gray-950/60 w-96 p-5 bg-opacity-50 transition-opacity duration-30000 ease-in-out">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <Cart />
      <form method="dialog" className="absolute bottom-5 right-5">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default CartModal