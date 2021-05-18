import React, {useState, useEffect} from 'react';
import {Table, TableHead, TableRow, TableData, THead, TableBody,DeleteTableData, Text} from './TableStyle'
import {AddButton} from '../../lib/style/generalStyles';
import Modal from '../../components/Modal/Modal'
import EventForm from '../../components/EventForm/EventForm';

import { FaTrash } from 'react-icons/fa'
const Admin = () => {
    const [addPressed, setAddPressed] = useState(false);
    const [events, setEvents] = useState([]);
    const openModal = () => {
        setAddPressed(!addPressed);
      }
    
    useEffect(() => {
        console.log(events);
    }, [events])

    const deleteEvent = (id) =>{
        const newEventsArray = events.filter(event => event.id!==id);
        setEvents(newEventsArray);
    }
    return(
<>  
{addPressed ? (<Modal setModal={openModal}><EventForm  addPressed={addPressed} setAddPressed={setAddPressed} events={events} setEvents={setEvents}/></Modal>) : null}
        <AddButton onClick={openModal}>Add Event</AddButton>
        {events && events.length>0 ? 
        (
            <Table>
                <THead>
            <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Naslov</TableHead>
                <TableHead>Datum</TableHead>
                <TableHead>Vrijeme od</TableHead>
                <TableHead>Vrijeme do</TableHead>
                <TableHead>Kapaciteti</TableHead>
                <TableHead>Firma</TableHead>
                <TableHead> </TableHead>
            </TableRow>
            </THead>
            <TableBody>
                {events.map(event =>
                                <TableRow>
                                <TableData >{event.id}</TableData>
                                <TableData>{event.title}</TableData>
                                <TableData>{event.date}</TableData>
                                <TableData>{event.timeFrom}</TableData>
                                <TableData>{event.timeTo}</TableData>
                                <TableData>{event.capacity}</TableData>
                                <TableData>{event.firm}</TableData>
                                <DeleteTableData><FaTrash size={25}  onClick={()=>{deleteEvent(event.id)}}/></DeleteTableData>
                            </TableRow>
                    )}
            </TableBody>
        </Table>
        ):
        (
            <Text>There are no events yet!</Text>
        )}

</>
    );
}
export default Admin;