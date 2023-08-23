import { createContext, ReactNode } from 'react';
import { useLocation } from 'react-router-dom'

type MenuContextProps = {
  menuItems: Array<{name: string, path: string}>;
  // location: Location;
  currentMenu: string;
  // setCurrentMenu: React.Dispatch<React.SetStateAction<string>>;
}
export const MenuContext = createContext<MenuContextProps | null>(null);

export function MenuContextProvider({ children }: { children: ReactNode }) {
  const menuItems = [
    {name: "Home", path: ""},
    {name: "Project", path: "projects"},
    {name: "Skill", path: "skill"},
    {name: "Experience", path: "experience"},
    {name: "Contact", path: "contact"},
  ]

  const location = useLocation()
  const currentMenu = location.pathname.substring(1)

  return (
    <MenuContext.Provider value={{menuItems, currentMenu}}>
      {children}
    </MenuContext.Provider>
  );
}

