import React from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';

const EventFilteredId = () => {
    const router = useRouter()
    const routeId = router.query.eventId;

    return (
        <div>
        </div>
    );
}

export default EventFilteredId;
