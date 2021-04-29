import React from 'react';
import Button from '../Button/Button';
import {
    Event as EventWrapper,
    Figure,
    Image,
    Title,
    Description
} from './EventStyle'

const Event = ({
    image,
    title,
    description,
    buttonText,
    imgAlt,
    route
}) => {
    return (
        <EventWrapper>
            <Figure>
                <Image src={image} alt={imgAlt}/>
            </Figure>
            <Title >{title}</Title>
            <Description >{description}</Description>
            <Button route={route} text={buttonText}/>

        </EventWrapper>
    );
}
export default Event;