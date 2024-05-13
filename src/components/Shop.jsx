import React from 'react'

const Shop = ({children}) => {
  return (
    <>
        <h2 className="text-2xl font-bold my-4">Choose Restaurant Items</h2>
        <ul className="flex flex-wrap -m-2">
            {children}
        </ul>
    </>
  )
}

export default Shop