import React from "react"
import Image from "next/image"

// media
import img1 from "../../public/home-1.png"
import img2 from "../../public/home-2.png"
// react slick
import Slider from "react-slick"
// style
import styles from "../../styles/SliderCarousel.module.scss"

export const SliderCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className={styles.slider}>
      <Slider className={styles.sliderContainer} {...settings}>
        <div className={styles.img1}>
          <p>image</p>
        </div>
        <div className={styles.img2}>
          <p>image</p>
        </div>
        <video
          className={styles.vid}
          src={require("../../public/home-3.mp4")}
          muted
          style={{ width: "100%", height: "100%" }}
        />
        <video
          className={styles.vid}
          src={require("../../public/home-4.mp4")}
          muted
          style={{ width: "100%", height: "100%" }}
        />
      </Slider>
    </div>
  )
}
