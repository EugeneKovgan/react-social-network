import classes from "./Navbar.module.scss"
const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <ul className={classes.items_list}>
        <li className={classes.item}>Profile</li>
        <li className={classes.item}>Message</li>
        <li className={classes.item}>Music</li>
        <li className={classes.item}>Settings</li>
      </ul>
    </div>
  )
}

export default Navbar;