import Board from "./Board";
import styles from './header.module.scss'

type HomeHeaderProps = {
  isHome: boolean;
}

export default function HomePageHeader(props: HomeHeaderProps) {

  return (
    <header className={props.isHome ? styles.header : styles.subheader}>
      <Board />
    </header>
  )
}
