import React, { useState } from "react"
import Image from "next/image"

// media
import img1 from "../../../public/img1.png"
import img2 from "../../../public/img2.png"
import img3 from "../../../public/img3.png"
import img4 from "../../../public/img4.png"
import img5 from "../../../public/img5.png"
import img6 from "../../../public/img6.png"
// style
import styles from "../../../styles/blogs/Featured.module.scss"

const Featured = () => {
  return (
    <article className={styles.featured}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src={img1}
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <h2>sale of ordinary membership at the club</h2>
          <span></span>
          <p>Purchase of membership directly from the club</p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src={img2}
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <h2>SOCIAL DANCE NIGHT BLACK & WHITE NIGHT</h2>
          <span></span>
          <p>
            Come out and dance to a live band and have the time of your life.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src={img3}
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <h2>21ST SSC OPEN INVITATIONAL MIDGET MEET 2015</h2>
          <span></span>
          <p>
            12 & 13 SEPTEMBER <br /> Venue : Competition Pool
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src={img4}
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <h2>ANNUAL 9-BALL POOL COMPETITION</h2>
          <span></span>
          <p>
            Time : 7pm (weekdays) <br /> Venue : Billiards Room (Bowling Centre)
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src={img5}
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <h2>22ND TABLE TENNIS OPEN CHAMPIONSHIP</h2>
          <span></span>
          <p>
            Men&apos;s Singles / Doubles <br /> Ladies&apos; Singles / Doubles{" "}
            <br /> Mixed Doubles
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.image}>
            <Image
              src={img6}
              alt="image"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <h2>Weekend Bazaar EVERY SATURDAY</h2>
          <span></span>
          <p>
            Time : 10am to 10pm <br /> Venue : The Atrium
          </p>
        </div>
      </div>
    </article>
  )
}

export default Featured
