import React from 'react';
import Link from 'next/link'
import { getAllEvents } from '../../../dummy-data';
import EventList from '../../components/events/EventList';

const AllEvents = () => {
    const events = getAllEvents();

    return (
        <div>
            <EventList items={events}/>
        </div>
    );
}

export default AllEvents;
