import React from "react"
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

  return (
    <section className={styles.blogs}>
      <div className={styles.container}>
        <div className={styles.tabs}>
          <Link
            className={`${styles.tab} ${styles.featured}`}
            selected={isFeatured}
            href={{ pathname: "/", query: { blog: "featured" } }}
            scroll={false}
          >
            Featured
          </Link>
          <Link
            className={`${styles.tab} ${styles.events}`}
            selected={isEvents}
            href={{ pathname: "/", query: { blog: "events" } }}
            scroll={false}
          >
            Events
          </Link>
          <Link
            className={`${styles.tab} ${styles.publication}`}
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
