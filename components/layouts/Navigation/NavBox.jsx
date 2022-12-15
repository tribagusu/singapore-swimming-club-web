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
            <span>MENU</span>
            <i className={styles.arrowDown}></i>
          </>
        ) : (
          <i className={styles.arrowUp}>
            <IoIosArrowUp />
          </i>
        )}
      </button>
    </div>
  )
}

export default NavBox
