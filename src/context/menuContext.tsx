import { createContext, ReactNode } from 'react';

export const MenuContext = createContext<Array<{name: string, path: string}> | null>(null);

export function MenuContextProvider({ children }: { children: ReactNode }) {
  const menuItems = [
    {name: "Home", path: ""},
    {name: "Projects", path: "projects"},
    {name: "Skill", path: "skill"},
    {name: "Experience", path: "experience"},
    {name: "Contact", path: "contact"},
  ]

  return (
    <MenuContext.Provider value={ menuItems }>
      {children}
    </MenuContext.Provider>
  );
}

