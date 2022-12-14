import React, { useState } from "react"

// components
import SliderCarousel from "./carousel/SliderCarousel"
// style
import styles from "../styles/Hero.module.scss"

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.carousel}>
          <SliderCarousel />
        </div>
      </div>
    </div>
  )
}

export default Hero
