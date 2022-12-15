import React, { useState } from "react"

// components
import SliderCarousel from "./SliderCarousel"
// style
import styles from "../../styles/hero/Hero.module.scss"

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
