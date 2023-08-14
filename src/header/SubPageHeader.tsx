import Board from "./Board";
import styles from './header.module.scss'

export default function SubPageHeader() {

  return (
    <header className={styles.subheader}>
      <Board />
    </header>
  )
}
