import styles from './menu.module.scss'
import MenuItem from './MenuItem'
import { useContext, useState } from 'react'
import { mobileMenuContext } from '../App';

export default function Menu() {

  useState

  const mobileMenuRef = useContext(mobileMenuContext)
  const onMobileMenuCloseClicked = () => {
    if(mobileMenuRef.current) {
      mobileMenuRef.current.style.display = "none";
    }
  }

  return (
    <div className={styles.menu} ref={mobileMenuRef}>
      <i className={`fa-solid fa-xmark ${styles.mobile_menu_close}`} onClick={onMobileMenuCloseClicked}></i>
      <MenuItem name="Home" path="" />
      <MenuItem name="Projects" path="projects" />
      <MenuItem name="Skill" path="skill" />
      <MenuItem name="Experience" path="experience" />
      <MenuItem name="Contact" path="contact" />
    </div>
  )
}
