import styles from "./Navbar.module.scss"
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.items_list}>
        <li className={styles.item}>Profile</li>
        <li className={styles.item}>Message</li>
        <li className={styles.item}>Music</li>
        <li className={styles.item}>Settings</li>
      </ul>
    </div>
  )
}

export default Navbar;