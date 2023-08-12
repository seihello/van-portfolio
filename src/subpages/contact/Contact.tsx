import styles from './contact.module.scss'

type Props = {
  name: string;
  link: string;
  iconClassName: string;
}

export default function Contact(props: Props) {
  return (
    <a className={styles.contact_link} href={props.link}>
      <button className={styles.contact_item}>
        <i className={props.iconClassName}></i>
        <p>{props.name}</p>
      </button>
    </a>
  )
}
