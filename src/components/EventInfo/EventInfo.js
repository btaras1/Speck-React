import React from 'react';
import Button from '../Button/Button'
import {
    EventInfo as EventInfoWrapper,
    Figure,
    Image,
    Content,
    Row,
    Item,
    Title,
    Value,
    Description
} from './EventInfoStyle'

const EventInfo = ({imageUrl, imageAlt, location, dateTime, availability, company, description}) =>{
    return(
        <>
        <EventInfoWrapper>
        <Figure>
            <Image src={imageUrl} alt={imageAlt}/>
        </Figure>
        <Content>
            <Row>
                <Item>
                    <Title>Lokacija</Title>
                    <Value>{location}</Value>
                </Item>
                <Item>
                    <Title>Datum i vrijeme</Title>
                    <Value>{dateTime}</Value>
                </Item>                   
            </Row>
            <Row>
                <Item>
                    <Title>Slobodna mjesta</Title>
                    <Value>{availability}</Value>
                </Item>
                <Item>
                    <Title>Firma</Title>
                    <Value>{company}</Value>
                </Item>                   
            </Row>
            <Button text="Prijavi se"/>
        </Content>
        </EventInfoWrapper>
        <Description>
            {description}
        </Description>
        
</>
    );
}

export default EventInfo;