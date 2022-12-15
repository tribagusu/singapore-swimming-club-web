import React from "react"
import Link from "next/link"

// style
import styles from "../../../styles/FooterLinks.module.scss"

const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
      <div className={styles.links}>
        <Link href="#">
          <p>Home</p>
        </Link>
        <br />
        <Link href="#">
          <p>About Us</p>
        </Link>
        <Link href="#">
          <p>Brief History</p>
        </Link>
        <Link href="#">
          <p>Club Milestones</p>
        </Link>
        <Link href="#">
          <p>Swimming Milestones</p>
        </Link>
        <Link href="#">
          <p>
            Management Committee <br /> & Club Management
          </p>
        </Link>
        <Link href="#">
          <p>Club Directory</p>
        </Link>
        <br />
        <Link href="#">
          <p>Club Buzz</p>
        </Link>
        <br />
        <Link href="#">
          <p>Facilities</p>
        </Link>
        <Link href="#">
          <p>Sport</p>
        </Link>
        <Link href="#">
          <p>General</p>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="#">
          <p>Membership</p>
        </Link>
        <Link href="#">
          <p>Membership Schemes</p>
        </Link>
        <Link href="#">
          <p>Reciprocal Schemes</p>
        </Link>
        <Link href="#">
          <p>Golfing Membership</p>
        </Link>
        <Link href="#">
          <p>Transfer Procdures & FAQ</p>
        </Link>
        <Link href="#">
          <p>Find Out More</p>
        </Link>
        <br />
        <Link href="#">
          <p>Banquet</p>
        </Link>
        <br />
        <Link href="#">
          <p>Photo Gallery</p>
        </Link>
        <Link href="#">
          <p>Sport</p>
        </Link>
        <Link href="#">
          <p>Swimming</p>
        </Link>
        <Link href="#">
          <p>Social</p>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="#">
          <p>Wine And Dine</p>
        </Link>
        <Link href="#">
          <p>Jakson Miller</p>
        </Link>
        <Link href="#">
          <p>The Palms</p>
        </Link>
        <Link href="#">
          <p>Jade Phoenix</p>
        </Link>
        <Link href="#">
          <p>Cabana</p>
        </Link>
        <Link href="#">
          <p>Le Petit Tressor</p>
        </Link>
        <Link href="#">
          <p>The Delicatesen</p>
        </Link>
        <Link href="#">
          <p>Fountain Bar</p>
        </Link>
        <Link href="#">
          <p>D&apos;Tanjong</p>
        </Link>
        <Link href="#">
          <p>D&apos;Sports</p>
        </Link>
        <Link href="#">
          <p>D&apos;Galaxy</p>
        </Link>
        <Link href="#">
          <p>Straits of Malacca</p>
        </Link>
        <br />
        <Link href="#">
          <p>What&apos;s New</p>
        </Link>
        <Link href="#">
          <p>Sport</p>
        </Link>
        <Link href="#">
          <p>Swimming</p>
        </Link>
        <Link href="#">
          <p>Social</p>
        </Link>
      </div>
    </div>
  )
}

export default FooterLinks
