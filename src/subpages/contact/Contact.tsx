import styles from './contact.module.scss'

type Props = {
  name: string;
  link: string;
  imageName: string;
}

export default function Contact(props: Props) {
  return (
    <a className={styles.contact_link} href={props.link}>
      <img src={props.imageName} />
      <p>{props.name}</p>
    </a>
  )
}
