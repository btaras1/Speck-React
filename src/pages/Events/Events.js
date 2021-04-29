import React, {useEffect} from 'react';
import Section from '../../components/Section/Section'
import {Grid} from '../../lib/style/generalStyles'
import EventCard from '../../components/EventCard/EventCard'

const Events = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        })
return (
    <Section title="Events">
        <Grid columns={3}>
            <EventCard 
                title="UX/UI design workshop"
                location="Hodnik FOI-a"
                date="14.10. (9:00-16:00h)"
                seats="15/60"
                company="Speck"
                buttonText="Find out more"
            />
            <EventCard 
                title="UX/UI design workshop"
                location="Hodnik FOI-a"
                date="14.10. (9:00-16:00h)"
                seats="15/60"
                company="Speck"
                buttonText="Find out more"
            />
            <EventCard 
                title="UX/UI design workshop"
                location="Hodnik FOI-a"
                date="14.10. (9:00-16:00h)"
                seats="15/60"
                company="Speck"
                buttonText="Find out more"
            />
            <EventCard 
                title="UX/UI design workshop"
                location="Hodnik FOI-a"
                date="14.10. (9:00-16:00h)"
                seats="15/60"
                company="Speck"
                buttonText="Find out more"
            />
            <EventCard 
                title="UX/UI design workshop"
                location="Hodnik FOI-a"
                date="14.10. (9:00-16:00h)"
                seats="15/60"
                company="Speck"
                buttonText="Find out more"
            />
            <EventCard 
                title="UX/UI design workshop"
                location="Hodnik FOI-a"
                date="14.10. (9:00-16:00h)"
                seats="15/60"
                company="Speck"
                buttonText="Find out more"
            />
            
        </Grid>
    </Section>
);
}

export default Events;