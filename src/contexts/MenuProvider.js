import React, {useState, useContext} from 'react'

const MenuContext = React.createContext()
export function useMenuContext(){return useContext(MenuContext)}

export default function MenuProvider({children}) {
    const [showMenu, setShowMenu] = useState(false)
    const [activeLink, setActiveLink] = useState("#")
    
    return (
        <MenuContext.Provider value={{showMenu, setShowMenu, activeLink, setActiveLink}}>
            {children}
        </MenuContext.Provider>
    )
}
