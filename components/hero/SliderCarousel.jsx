import React, { useState, useEffect } from "react"

// react slick
import Slider from "react-slick"
// style
import styles from "../../styles/hero/SliderCarousel.module.scss"

const SliderCarousel = () => {
  const [videoPlay, setVideoPlay] = useState("autoplay")
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeSlide2, setActiveSlide2] = useState(0)

  useEffect(() => {
    if (
      Number(Object.values(activeSlide2).join()) !== 2 ||
      Number(Object.values(activeSlide2).join()) !== 3
    ) {
      setVideoPlay("paused")
    } else {
      setVideoPlay("autoplay")
    }
  }, [activeSlide2])

  // console.log(activeSlide, activeSlide2)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide({ activeSlide: next }),
    afterChange: (current) => setActiveSlide2({ activeSlide2: current }),
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
        autoPlay={videoPlay}
        muted
        loop
        style={{ width: "100%", height: "100%" }}
      />
      <video
        className={styles.vid}
        src={require("../../public/home-4.mp4")}
        autoPlay={videoPlay}
        muted
        loop
        style={{ width: "100%", height: "100%" }}
      />
    </Slider>
  )
}

export default SliderCarousel
