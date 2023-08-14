import styles from './menu.module.scss'
import { useContext } from 'react'
import { mobileMenuContext } from '../App';
import { MenuContext } from '../context/menuContext';

export default function MobileMenu() {
  const mobileMenuRef = useContext(mobileMenuContext)
  const menuItems = useContext(MenuContext)

  const onMobileMenuCloseClicked = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.style.display = "none";
    }
  }

  return (
    <div className={styles.mobile_menu} ref={mobileMenuRef}>
      <i className={`fa-solid fa-xmark ${styles.mobile_menu_close}`} onClick={onMobileMenuCloseClicked}></i>
      {menuItems?.map((menuItem) => {
        return (
          <a href={`/${menuItem.path}`}>
            <div className={styles.menu_item}>
              <div>{menuItem.name}</div>
            </div>
          </a>
        )
      })}
    </div>
  );
}
