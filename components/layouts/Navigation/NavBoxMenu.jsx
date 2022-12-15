import React from "react"
import Link from "next/link"
// style
import styles from "../../../styles/nav/NavBoxMenu.module.scss"

const NavBoxMenu = () => {
  return (
    <nav className={styles.navMenu}>
      <Link className={styles.menu} href="#">
        About Us
      </Link>
      <Link className={styles.menu} href="#">
        Club Buzz
      </Link>
      <Link className={styles.menu} href="#">
        Membership
      </Link>
      <Link className={styles.menu} href="#">
        Wine & Dine
      </Link>
      <Link className={styles.menu} href="#">
        Facilities
      </Link>
      <Link className={styles.menu} href="#">
        Banquet
      </Link>
      <Link className={styles.menu} href="#">
        Gallery
      </Link>
      <Link className={styles.menu} href="#">
        What&apos;s New
      </Link>
      <Link className={styles.menu} href="#">
        Sports
      </Link>
      <Link className={styles.menu} href="#">
        Swimming
      </Link>
      <Link className={styles.menu} href="#">
        Social
      </Link>
    </nav>
  )
}

export default NavBoxMenu
