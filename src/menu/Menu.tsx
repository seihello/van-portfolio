import styles from './menu.module.scss'
import MenuItem from './MenuItem'

export default function menu() {

  return (
    <div className={styles.menu}>
      <MenuItem name="Home" path="" />
      <MenuItem name="Projects" path="projects" />
      <MenuItem name="Skill" path="skill" />
      <MenuItem name="Experience" path="experience" />
      <MenuItem name="Contact" path="contact" />
    </div>
  )
}
