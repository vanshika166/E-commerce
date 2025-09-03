import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'


export const pageDataContext = createContext()

const PageContext = ({ children }) => {
    const [cart, setCart] = useState(false)
    const [dropMenu, setDropMenu] = useState(false)

    const handleCart = () => {
        setCart(!cart)
    }
    const handleDropMenu = () => {
        setDropMenu(!dropMenu)
    }

    const value = {
        handleCart,
        handleDropMenu,
        cart,
        dropMenu,
        setDropMenu,
        setCart
    }

    return (
        <pageDataContext.Provider value={value}>
            {children}
        </pageDataContext.Provider>
    )
}

export default PageContext;
