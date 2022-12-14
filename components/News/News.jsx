import React, { useState } from "react"

// style
import styles from "../../styles/news/News.module.scss"

const News = () => {
  const [showNews, setShowNews] = useState(false)

  const handleShowNews = () => setShowNews(true)

  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <h2>NEWS</h2>
        <div className={styles.articles}>
          <article>
            <small className={styles.date}>15 September 2015</small>
            <h4>the palms open for breakfast</h4>
            <p>
              Please be informed that due to the haze, breakfast will be served
              at The Palms from <strong>8.00 am to 10.45am.</strong> Members are
              to observe the dress code required at The Palms. <br />
              <strong>Dress Code at The Palms</strong> <br /> Soiled or wet
              clothing and swimmer are not allowed.
            </p>
          </article>

          <article>
            <small className={styles.date}>10 September 2015</small>
            <h4>pro shop operation hours</h4>
            <p>
              Please be informed of the Pro Shop&apos;s new operating hours.
              <br /> Monday - Wednesday & Friday : 3pm - 8pm <br /> Saturday &
              Sunday : 12pm - 8pm <br /> Thursday : CLOSED
            </p>
          </article>

          {/* READ MORE */}
          {showNews && (
            <article>
              <small className={styles.date}>15 September 2015</small>
              <h4>the palms open for breakfast</h4>
              <p>
                Please be informed that due to the haze, breakfast will be
                served at The Palms from <strong>8.00 am to 10.45am.</strong>{" "}
                Members are to observe the dress code required at The Palms.{" "}
                <br />
                <strong>Dress Code at The Palms</strong> <br /> Soiled or wet
                clothing and swimmer are not allowed.
              </p>
            </article>
          )}

          {showNews && (
            <article>
              <small className={styles.date}>10 September 2015</small>
              <h4>pro shop operation hours</h4>
              <p>
                Please be informed of the Pro Shop&apos;s new operating hours.
                <br /> Monday - Wednesday & Friday : 3pm - 8pm <br /> Saturday &
                Sunday : 12pm - 8pm <br /> Thursday : CLOSED
              </p>
            </article>
          )}
        </div>
        <button onClick={handleShowNews}>Read More +</button>
      </div>
    </section>
  )
}

export default News
