import styles from './menu.module.scss'
import { useContext } from 'react'
import { mobileMenuContext } from '../App';

export default function Navigation() {
  const mobileMenuRef = useContext(mobileMenuContext)
  return (
    <div className={styles.nav} ref={mobileMenuRef}>
      Mobile Menu
    </div>
  );
}
