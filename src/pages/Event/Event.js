import React, {useState, useEffect} from 'react';
import Button from '../../components/Button/Button';
import Section from '../../components/Section/Section';
import './Event.scss';
import { Link } from 'react-router-dom';
import image from '../../assets/images/design.jpg';
import eventsMock from '../../lib/mock/events';

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
        <div className="EventInfo">
        <figure className="EventInfo-Figure">
            <img src={event.imageUrl} alt={event.imageAlt} className="EventInfo-Image"/>
        </figure>
        <div className="EventInfo-Content">
            <div className="EventInfo-Content-Row">
                <div className="EventInfo-Item">
                    <h3 className="EventInfo-Item-Title">Lokacija</h3>
                    <p className="EventInfo-Item-Value">{event.location}</p>
                </div>

                <div className="EventInfo-Item">
                    <h3 className="EventInfo-Item-Title">Datum i vrijeme</h3>
                    <p className="EventInfo-Item-Value">{event.dateTime}</p>
                </div>
            </div>
            <div className="EventInfo-Content-Row">
                <div className="EventInfo-Item">
                    <h3 className="EventInfo-Item-Title">Slobodna mjesta</h3>
                    <p className="EventInfo-Item-Value">{event.availability}</p>
                </div>

                <div className="EventInfo-Item">
                    <h3 className="EventInfo-Item-Title">Firma</h3>
                    <p className="EventInfo-Item-Value">{event.company}</p>
                </div>
            </div>
            
            <Button text="Prijavi se"/>
            
        </div>
    </div>
    <p className="EventInfo-Description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam obcaecati totam esse possimus placeat dolorem eaque est odit laudantium fugit doloremque vel eos, culpa accusamus accusantium necessitatibus nihil voluptates illo. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Dignissimos aspernatur commodi ab ipsam iste explicabo error, sit sapiente magni tempore dolorem magnam cum, animi fugiat praesentium, ipsa neque. Non, repellat.</p>
        </Section>
}
        </>
    );
}

export default Event;