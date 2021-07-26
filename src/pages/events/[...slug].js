import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import Button from "../../components/ui/buttons/button";
import classes from "../../components/ui/buttons/button.module.css";
import ErrorAlert from "../../components/ui/alert/ErrorAlert";

const EventFilteredId = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p>Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Please check you filters!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events </Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>;
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events </Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default EventFilteredId;
