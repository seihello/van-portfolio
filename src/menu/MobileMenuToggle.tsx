import styles from './menu.module.scss'
import { useContext } from 'react'
import { mobileMenuContext } from '../App';

export default function MobileMenuToggle() {

  const mobileMenuRef = useContext(mobileMenuContext)

  const onClickMobileMenuToggle = () => {
    if(mobileMenuRef.current) {
      mobileMenuRef.current.style.display = "block";
    }

  }

  return (
    <i className={`fa-solid fa-bars ${styles.mobile_menu_toggle}`} onClick={onClickMobileMenuToggle}></i>
  )
}
