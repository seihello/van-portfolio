import styles from './menu.module.scss'
import { useContext } from 'react'
import { mobileMenuContext } from '../App';

export default function Navigation() {
  const mobileMenuRef = useContext(mobileMenuContext)
  const onMobileMenuCloseClicked = () => {
    if(mobileMenuRef.current) {
      mobileMenuRef.current.style.display = "none";
    }
  }


  return (
    <div className={styles.nav} ref={mobileMenuRef}>
      <i className={`fa-solid fa-xmark ${styles.mobile_menu_close}`} onClick={onMobileMenuCloseClicked}></i>
    </div>
  );
}
