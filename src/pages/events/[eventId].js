import React from "react";
import { Fragment } from "react";
import { getEventById } from '../../helpers/api-ultils';
import EventSummary from "../../components/events/EventSummary";
import EventLogistics from "../../components/events/EventLogistics";
import EventContent from "../../components/events/EventContent";
import ErrorAlert from "../../components/ui/alert/ErrorAlert";
import Button from "../../components/ui/buttons/button";

function EventId(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <>
        <ErrorAlert>
          <p>no event found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const event = getEventById(eventId);

  return {
    props: {
      selectedEvent: event
    }
  }
}

export default EventId;
