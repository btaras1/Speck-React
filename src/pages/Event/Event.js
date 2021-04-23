import React, {useEffect} from 'react';
import Button from '../../components/Button/Button';
import Section from '../../components/Section/Section';
import './Event.scss';
import { Link } from 'react-router-dom';
import image from '../../assets/images/design.jpg';

const Event = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        })
    return (
        <>
        <Section title="UX/UI design workshop">
        <div className="EventInfo">
        <figure className="EventInfo-Figure">
            <img src={image} alt="UX/UI design workshop" className="EventInfo-Image"/>
        </figure>
        <div className="EventInfo-Content">
            <div className="EventInfo-Content-Row">
                <div className="EventInfo-Item">
                    <h3 className="EventInfo-Item-Title">Lokacija</h3>
                    <p className="EventInfo-Item-Value">Hodnik FOI-a</p>
                </div>

                <div className="EventInfo-Item">
                    <h3 className="EventInfo-Item-Title">Datum i vrijeme</h3>
                    <p className="EventInfo-Item-Value">14.10. (9:00-16:00h)</p>
                </div>
            </div>
            <div className="EventInfo-Content-Row">
                <div className="EventInfo-Item">
                    <h3 className="EventInfo-Item-Title">Slobodna mjesta</h3>
                    <p className="EventInfo-Item-Value">15/60</p>
                </div>

                <div className="EventInfo-Item">
                    <h3 className="EventInfo-Item-Title">Firma</h3>
                    <p className="EventInfo-Item-Value">Speck</p>
                </div>
            </div>
            <Link to="/event" style={{ textDecoration: 'none' }}>
            <Button text="Prijavi se"/>
            </Link>
        </div>
    </div>
    <p className="EventInfo-Description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam obcaecati totam esse possimus placeat dolorem eaque est odit laudantium fugit doloremque vel eos, culpa accusamus accusantium necessitatibus nihil voluptates illo. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Dignissimos aspernatur commodi ab ipsam iste explicabo error, sit sapiente magni tempore dolorem magnam cum, animi fugiat praesentium, ipsa neque. Non, repellat.</p>
        </Section>
        </>
    );
}

export default Event;