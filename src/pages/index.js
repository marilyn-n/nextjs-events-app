
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {getFeaturedEvents} from '../../dummy-data';
import EventList from '../components/events/EventList';
import EventsSearch from '../components/events/EventsSearch';

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className={styles.container}>
      <EventsSearch />
      <EventList items={featuredEvents} />
    </div>
  )
}
