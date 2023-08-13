import styles from './menu.module.scss'
import { Link } from 'react-router-dom'

type Props = {
  name: string;
  path: string;
}

export default function MenuItem(props: Props) {
  return (
    <Link to={`/${props.path}`} className={styles.menu_item}>
      <div>{props.name}</div>
    </Link>
  )
}
