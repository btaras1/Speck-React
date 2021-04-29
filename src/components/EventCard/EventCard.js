import React from 'react';
import Button from '../Button/Button'
import './EventCard.scss';

const EventCard = ({title, location, date, company, seats, buttonText}) =>{
    return(
        <>
        <div className="EventCard">
        <h2 className="EventCard-Title">{title}</h2>
<div className="EventCard-Content">
    <div className="EventCard-Content-Row">
        <div className="EventCard-Item">
            <h3 className="EventCard-Item-Title">Lokacija</h3>
            <p className="EventCard-Item-Value">{location}</p>
        </div>

        <div className="EventCard-Item">
            <h3 className="EventCard-Item-Title">Datum i vrijeme</h3>
            <p className="EventCard-Item-Value">{date}</p>
        </div>
    </div>
    <div className="EventCard-Content-Row">
        <div className="EventCard-Item">
            <h3 className="EventCard-Item-Title">Slobodna mjesta</h3>
            <p className="EventCard-Item-Value">{seats}</p>
        </div>

        <div className="EventCard-Item">
            <h3 className="EventCard-Item-Title">Firma</h3>
            <p className="EventCard-Item-Value">{company}</p>
        </div>
    </div>
</div>

<Button route="/event" text={buttonText}/>

</div>
</>
    );
}

export default EventCard;