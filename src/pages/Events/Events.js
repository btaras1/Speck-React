import React, {useEffect, useState} from 'react';
import Section from '../../components/Section/Section'
import {Grid} from '../../lib/style/generalStyles'
import EventCard from '../../components/EventCard/EventCard'
import eventsMock from '../../lib/mock/events';
import SearchBar from '../../components/SearchBar/SearchBar';
import DataLoader from '../../components/DataLoader/DataLoader';
const Events = () => {
    const [eventsDefault, setEventsDefault] = useState(null);
    const [events, setEvents] = useState(null);
    const [input,setInput] = useState('');
    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
             setEvents(eventsMock);
            setEventsDefault(eventsMock);
        }, 1000);
    }, []);



    const updateInput= (input) => {
        const filtered = eventsDefault.filter(event => {
            return event.title.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setEvents(filtered);
    }
return (
    <Section title="Events">
    {events ? (
        <>
        <SearchBar
            input={input}
            setInput={updateInput}
            isDisabled={false}
        />
        <Grid columns={4}>
            {events.map(event =>
        <EventCard 
            key={event.id}
            title={event.title}
            location={event.location}
            date={event.dateTime}
            seats={event.availability}
            company={event.company}
            buttonText="Find out more"
            route={`/event/${event.id}`}
                        />
                )}           
        </Grid>
        </>
    )
    :(
        <>
        <SearchBar
        isDisabled={true}
        />
        <DataLoader />
      </>
    )
    }
    </Section>
);
}

export default Events;