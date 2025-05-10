import { createContext, useContext, useState, ReactNode } from 'react';

interface MenuContextType {
    isRevealed: boolean;
    toggleMenu: () => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

interface MenuProviderProps {
    children: ReactNode;
}

export function MenuProvider({ children }: MenuProviderProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const value: MenuContextType = { isRevealed: isOpen, toggleMenu };

    return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenu(): MenuContextType {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenu must be used within a MenuProvider');
    }
    return context;
}