
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>HOME (Show featured events)</h2>
      <Link href="/">
        <a>Home</a>
      </Link>
      
      <Link href="/events">
        <a>All Events</a>
      </Link>

      <h3>Featured Events by ID</h3>
      <Link href="/events/1">
        <a>Featured 1</a>
      </Link>
      <Link href="/events/2">
        <a>Featured 2</a>
      </Link>
      <Link href="/events/3">
        <a>Featured 3</a>
      </Link>
    </div>
  )
}
