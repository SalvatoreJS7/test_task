import React, {useContext, useEffect, useState} from 'react';
import Participant from './Participant.jsx';
import { eventIDContext } from './EventsList.jsx';


const participants = [
    {
        name: 'Gregoriy Dmitrevich',
        email: 'gregiriy@gmail.com',
    },
    {
        name: 'Valeriy Zalyshnyi',
        email: 'valerka44@gmail.com',  
    },
    {
        name: 'Stepan Ravidovich',
        email: 'stepa55ra@gmail.com',  
    },
    {
        name: 'Zlatko Dalich',
        email: 'zlatko777@gmail.com',  
    },
    {
        name: 'Maria Tussent',
        email: 'tus7mar@gmail.com',  
    },
    {
        name: 'Roberto Manchini',
        email: 'robbi89@gmail.com',  
    },
];

const Participants = () => {
    const [currentEventId, setCurrentEventId] = useContext(eventIDContext);
    const [participants, setParticipants] = useState([]);
    useEffect(() => {
        const getParticipants = async () => {
            const response = await fetch(`http://localhost:3001/participants?event_id=${currentEventId}`);
            const data = await response.json();
            console.log('pisa', data);
            setParticipants(data);
        }
        if (currentEventId) {
            getParticipants();
        }
        
    }, [currentEventId]);
  return (
    <div>
        <div className="header">
            <h1 className="events">Participants</h1>
        </div>

        <div className="events_item_list">
            {participants.map((participant) => <Participant participant={participant}/>)}
        </div>

        <div className="btn">
            <a href='/' className="btn_back">Go back</a>
        </div>
    </div>
  )
}

export default Participants
