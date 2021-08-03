import  { getFeaturedEvents }  from '../helpers/api-ultils';
import styles from '../styles/Home.module.css'
import EventList from '../components/events/EventList';

function Home(props) {
  return (
    <div className={styles.container}>
      <EventList items={props.events} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    }
  }
}

export default Home;