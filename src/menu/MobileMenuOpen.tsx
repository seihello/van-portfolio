import styles from './menu.module.scss'
import { useContext } from 'react'
import { mobileMenuContext } from '../App';

export default function MobileMenuOpen() {

  const mobileMenuRef = useContext(mobileMenuContext)

  const onClickMobileMenuOpen = () => {
    if(mobileMenuRef.current) {
      mobileMenuRef.current.style.display = "flex";
    }

  }

  return (
    <i className={`fa-solid fa-bars ${styles.mobile_menu_open}`} onClick={onClickMobileMenuOpen}></i>
  )
}
