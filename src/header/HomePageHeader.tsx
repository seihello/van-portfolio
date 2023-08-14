import Board from "./Board";
import styles from './header.module.scss'

export default function HomePageHeader() {

  return (
    <header className={styles.header}>
      <Board />
    </header>
  )
}
