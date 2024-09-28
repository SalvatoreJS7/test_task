import React from 'react';
import {useContext} from 'react';
import { eventIDContext } from './EventsList';
import { useNavigate } from "react-router-dom"; 

const Event = ({event}) => {
    console.log('hrh', event)
    const [currentEventId, setCurrentEventId] = useContext(eventIDContext);
    const navigate = useNavigate();
    const onClickParticipants = (e) => {
        e.preventDefault();
        setCurrentEventId(event.id);
        console.log('set', event.id)
        navigate('/participants');
    }
    const onClickRegister = (e) => {
        e.preventDefault();
        setCurrentEventId(event.id);
        console.log('set', event.id)
        navigate('/register');
    }
  return (
        <div className='event'>
            <h3 className="title">{event.title}</h3>
            <p4 className="description">{event.description}</p4>
            <div className="date_organizer">
                <div className="date">{event.date}</div>
                <div className="organizer">{event.organizer}</div>
            </div>
            <div className="btn">
                <a href='/register' onClick={onClickRegister} className="register btn_style">Register</a>
                <a href='/participants' onClick={onClickParticipants} className="view btn_style">View</a>
            </div>
        </div>
    
  )
}

export default Event
