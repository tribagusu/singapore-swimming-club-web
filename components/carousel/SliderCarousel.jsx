import React, { useState, useEffect } from "react"

// react slick
import Slider from "react-slick"
// style
import styles from "../../styles/SliderCarousel.module.scss"

const SliderCarousel = () => {
  const [videoPlay, setVideoPlay] = useState("")

  const handleVideoPlay = () => {
    setVideoPlay("autoplay")
  }

  useEffect(() => {
    // handleVideoPlay()
    // console.log(window.location)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider className={styles.slider} {...settings}>
      <div className={`${styles.img} ${styles.img1}`}>
        <div className={styles.text}>
          <h1>The Premier Family Club</h1>
          <p>Where people make the difference</p>
        </div>
      </div>
      <div className={`${styles.img} ${styles.img2}`}>
        <div className={styles.text}>
          <h1>The Premier Family Club</h1>
          <p>Where people make the difference</p>
        </div>
      </div>
      <video
        className={styles.vid}
        src={require("../../public/home-3.mp4")}
        muted
        autoPlay={videoPlay}
        preload="auto"
        loop
        style={{ width: "100%", height: "100%" }}
      />
      <video
        className={styles.vid}
        src={require("../../public/home-4.mp4")}
        muted
        autoPlay={videoPlay}
        preload="auto"
        loop
        type="video/mp4"
        style={{ width: "100%", height: "100%" }}
      />
    </Slider>
  )
}

export default SliderCarousel
