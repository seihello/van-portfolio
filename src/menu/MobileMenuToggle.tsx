import styles from './menu.module.scss'

export default function MobileMenuToggle() {
  return (
    <i className={`fa-solid fa-bars ${styles.mobile_menu_toggle}`}></i>
  )
}
