import React from "react"

// style
import styles from "../../styles/news/UpcomingNews.module.scss"

const UpcomingNews = () => {
  return (
    <section className={styles.upcomingNews}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.heading}>
            <h2>Upcoming News</h2>
          </div>
          <div className={styles.text}>
            <h4>sale of ordinary membership at the club</h4>
          </div>
        </div>
        <p>
          We are pleased to inform you that Members can now use their Credit
          Cards to make purchases at the week-end Bazaar stalls.{" "}
          <span>Read More</span>
        </p>
        <p>
          Come out and dance to a live band and have the time of your life.
          Gentlemen, this a chance to wear your tuxedos, and ladies find your
          little black dress that you have always wanted to wear.{" "}
          <span>Read More</span>
        </p>
      </div>
    </section>
  )
}

export default UpcomingNews
