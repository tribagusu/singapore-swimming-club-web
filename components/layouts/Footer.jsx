import React from "react"
import Image from "next/image"
import Link from "next/link"

// components
import FooterLinks from "./Footer/FooterLinks"
import GoogleMaps from "./Footer/GoogleMaps"
// media
import logo2 from "../../public/logo2.jpg"
// style
import styles from "../../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.contacts}>
            <div className={styles.contact}>
              <div className={styles.logo}>
                <Image
                  src={logo2}
                  alt="logo"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <p>
                45 Tanjong Rhu Road <br /> Singapore 436899 <br /> <br />
                Tel : (65) 6342 3600 <br /> Fax : (65) 6344 4476
              </p>
            </div>
            <div className={styles.maps}>
              <GoogleMaps />
            </div>
          </div>

          <div className={styles.newsletter}>
            <h4>Email Newsletter</h4>
            <small>Subscribe to receive news in your inbox.</small>
            <form>
              <input type="email" placeholder="Email Adress" />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <div className={styles.links}>
          <FooterLinks />
        </div>
      </div>
      <div className={styles.copyright}>
        <small>
          &copy; Copyright 2015. Singapore Swimming Club. All Rights Reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer
