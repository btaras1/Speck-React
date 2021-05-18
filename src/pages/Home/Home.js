import React, {useState, useEffect} from 'react';
import eventsMock from '../../lib/mock/events';
import Hero from '../../components/Hero/Hero';
import Section from '../../components/Section/Section';
import {Grid} from '../../lib/style/generalStyles'
import Event from '../../components/Event/Event'
import DataLoader from '../../components/DataLoader/DataLoader';


const Home = () => {

    const [events, setEvents] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setEvents(eventsMock);
        }, 1000);
    }, []);






    return(
        <>
         <Hero />
        <Section title="Featured events" >
        {events ? (
          <Grid columns={3}>
              {events.map(event => event.isFeatured &&
          <Event 
                        key={event.id}
                        image={event.imageUrl}
                        imgAlt={event.imageAlt}
                        title={event.title}
                        description={event.shortDescription}
                        buttonText="Find out more"
                        route={`/event/${event.id}`}
                    />
              )
              }
          </Grid>
        )
        : ( 
        <DataLoader />
          )
          }
        </Section>
        </>
    );
}
export default Home;