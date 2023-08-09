import styles from './menu.module.scss'
import MenuItem from './MenuItem'

export default function menu() {

  return (
    <div className={styles.menu}>
      <MenuItem index={0} name="Home" path="" />
      <MenuItem index={1} name="Projects" path="projects" />
      <MenuItem index={2} name="Skill" path="skill" />
      <MenuItem index={3} name="Experience" path="experience" />
      <MenuItem index={4} name="Education" path="education" />
      <MenuItem index={5} name="Resume" path="resume" />
      <MenuItem index={6} name="Contact" path="contact" />
    </div>
  )
}
