import React from 'react';
import Button from '../Button/Button'
import {EventCard as EventCardWrapper,
        Title,
        Content,
        Row,
        Item,
        ItemTitle,
        Value       
} from './EventCardStyle';

const EventCard = ({title, location, date, company, seats, buttonText, route}) =>{
    return(
        <>
        <EventCardWrapper>
            <Title>{title}</Title>
            <Content>
                <Row>
                    <Item>
                        <ItemTitle>Lokacija</ItemTitle>
                        <Value>{location}</Value>
                    </Item>
                    <Item>
                        <ItemTitle>Datum i vrijeme</ItemTitle>
                        <Value>{date}</Value>
                    </Item>
                    </Row>
                    <Row>
                    <Item>
                        <ItemTitle>Slobodna mjesta</ItemTitle>
                        <Value>{seats}</Value>
                    </Item>
                    <Item>
                        <ItemTitle>Firma</ItemTitle>
                        <Value>{company}</Value>
                    </Item>
                </Row>
            </Content>
            <Button route={route} text={buttonText}/>
        </EventCardWrapper>
</>
    );
}

export default EventCard;