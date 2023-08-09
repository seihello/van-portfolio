import styles from './menu.module.scss'

type Props = {
  name: string;
  path: string;
}

export default function MenuItem(props: Props) {
  return (
    <a className={styles.menu_item} href={`/${props.path}`}>
      <div>{props.name}</div>
    </a>
  )
}
