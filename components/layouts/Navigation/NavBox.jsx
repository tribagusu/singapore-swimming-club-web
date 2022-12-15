import { useState } from "react"
import Image from "next/image"

// components
import NavBoxMenu from "./NavBoxMenu"
// media
import Logo from "../../../public/logo.png"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
// style
import styles from "../../../styles/nav/NavBox.module.scss"

const NavBox = () => {
  const [openMenuBox, setOpenMenuBox] = useState(false)

  const handleOpenMenuBox = () => {
    setOpenMenuBox(!openMenuBox)
  }

  return (
    <div className={styles.navBox}>
      <div className={styles.logo}>
        <Image
          src={Logo}
          alt="logo"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <nav className={styles.navigation}>{openMenuBox && <NavBoxMenu />}</nav>
      <button onClick={handleOpenMenuBox}>
        {!openMenuBox ? (
          <>
            <p>MENU</p>
            <span className={styles.arrowDown}></span>
          </>
        ) : (
          <span className={styles.arrowUp}>
            <IoIosArrowUp />
          </span>
        )}
      </button>
    </div>
  )
}

export default NavBox
