import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

const EventFilteredId = () => {
    const router = useRouter()
    const routeId = router.query.eventId;

    return (
        <div>
            <h2>Event Filterd Details Page ({routeId})</h2>
            <Link href='/'>Home</Link>
            <Link href='/events'>All Events</Link>
        </div>
    );
}

export default EventFilteredId;
