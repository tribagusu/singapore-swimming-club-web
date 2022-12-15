import React, { useState } from "react"
import Link from "next/link"
import { withRouter } from "next/router"

// components
import Featured from "./content/Featured"
import Events from "./content/Events"
import Publication from "./content/Publication"
// style
import styles from "../../styles/blogs/Blogs.module.scss"

const Blogs = ({ router }) => {
  const {
    query: { blog },
  } = router

  const isFeatured = blog === "featured" || blog == null
  const isEvents = blog === "events"
  const isPublication = blog === "publication"

  // Blog Show Button
  const [blogShowBtn, setBlogShowBtn] = useState("featured")
  const handleShowFeatured = () => setBlogShowBtn("featured")
  const handleShowEvents = () => setBlogShowBtn("events")
  const handleShowPublication = () => setBlogShowBtn("publication")

  return (
    <section className={styles.blogs}>
      <div className={styles.container}>
        <div className={styles.tabs}>
          <Link
            id={
              blogShowBtn === "featured"
                ? "blog-btn-active"
                : "blog-btn-passive"
            }
            className={`${styles.tab} ${styles.featured}`}
            onClick={handleShowFeatured}
            selected={isFeatured}
            href={{ pathname: "/", query: { blog: "featured" } }}
            scroll={false}
          >
            Featured
          </Link>
          <Link
            id={
              blogShowBtn === "events" ? "blog-btn-active" : "blog-btn-passive"
            }
            className={`${styles.tab} ${styles.events}`}
            onClick={handleShowEvents}
            selected={isEvents}
            href={{ pathname: "/", query: { blog: "events" } }}
            scroll={false}
          >
            Events
          </Link>
          <Link
            id={
              blogShowBtn === "publication"
                ? "blog-btn-active"
                : "blog-btn-passive"
            }
            className={`${styles.tab} ${styles.publication}`}
            onClick={handleShowPublication}
            selected={isPublication}
            href={{ pathname: "/", query: { blog: "publication" } }}
            scroll={false}
          >
            Publication
          </Link>
        </div>

        <article className={styles.content}>
          {isFeatured && <Featured />}
          {isEvents && <Events />}
          {isPublication && <Publication />}
        </article>
      </div>
    </section>
  )
}

export default withRouter(Blogs)
