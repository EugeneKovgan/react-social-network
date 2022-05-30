import styles from "./Navbar.module.scss"
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.items_list}>
        <li className={styles.item}><a href="/profile">"Profile"</a></li>
        <li className={styles.item}><a href="/message">"Message"</a></li>
        <li className={styles.item}><a href="/music">"Music"</a></li>
        <li className={styles.item}><a href="/settings">"Settings"</a></li>

      </ul>
    </div>
  )
}

export default Navbar;