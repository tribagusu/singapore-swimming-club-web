import React from "react"
import Link from "next/link"
// style
import styles from "../../../styles/NavMenu1.module.scss"

const NavMenu1 = () => {
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
    </nav>
  )
}

export default NavMenu1
