import React, {useState, useEffect} from 'react';
import Section from '../../components/Section/Section';
import eventsMock from '../../lib/mock/events';
import EventInfo from '../../components/EventInfo/EventInfo';

const Event = (props) => {

    const routeEventId = parseInt(props.match.params.id);
    const [events, setEvents] = useState(null);
    const [event, setEvent] = useState(null);

    useEffect(() => {
        setEvents(eventsMock);
    }, [])


    useEffect(() => {
        events && setEvent(...events.filter(event => event.id === routeEventId));
    }, [events, routeEventId]);

    useEffect(() => {
        window.scrollTo(0, 0);
        })
    

    return (
        <>
        {event &&
        <Section title={event.title}>
            <EventInfo
                imageUrl={event.imageUrl}
                imageAlt={event.imageAlt}
                location={event.location}
                dateTime={event.dateTime}
                availability={event.availability}
                company={event.company}
                description={event.description}
            />
        </Section>
}
        </>
    );
}

export default Event;