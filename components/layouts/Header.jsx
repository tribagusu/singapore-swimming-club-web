import React, { useState } from "react"
import Image from "next/image"
// media
import { BsSearch } from "react-icons/bs"
import Logo from "../../public/logo.png"
// components
import NavMenu1 from "./Navigation/NavMenu1"
// styles
import styles from "../../styles/Header.module.scss"
import NavBox from "./Navigation/NavBox"

const Header = () => {
  const [openSearchBox, setOpenSearchBox] = useState("")

  const handleOpenSearch = () => {
    setOpenSearchBox("openSearchBox")
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image
              src={Logo}
              alt="logo"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <nav className={styles.navigation}>
            <NavMenu1 />
          </nav>
          <div id={openSearchBox} className={styles.searchBox}>
            <input className={styles.searchInput} type="text" />
            <span className={styles.searchButton} onClick={handleOpenSearch}>
              <BsSearch />
            </span>
          </div>
        </div>
      </header>

      {/* navigation box */}
      <NavBox />
    </>
  )
}

export default Header
