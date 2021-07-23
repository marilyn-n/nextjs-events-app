
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {getFeaturedEvents} from '../../dummy-data';
import EventList from '../components/events/EventList';

export default function Home() {
  const featuredEvents = getFeaturedEvents();

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
      <EventList items={featuredEvents} />
    </div>
  )
}
