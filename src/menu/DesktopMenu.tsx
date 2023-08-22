import styles from './menu.module.scss'
import { useContext } from 'react'
import { MenuContext } from '../context/menuContext';
import { Link } from 'react-router-dom';

export default function DesktopMenu() {
  const menuItems = useContext(MenuContext)?.menuItems
  const currentMenu = useContext(MenuContext)?.currentMenu  

  return (
    <div className={styles.desktop_menu}>
      {menuItems?.map((menuItem) => {
        return (
          <Link to={`/${menuItem.path}`}>
            <div className={`${styles.menu_item} ${currentMenu === menuItem.path ? styles.active : ""}`}>
              <div>{menuItem.name}</div>
            </div>
          </Link>
        )
      })}
    </div>
  );
}
