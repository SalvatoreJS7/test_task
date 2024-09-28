import React from 'react';
import EventsPage from './EventsPage.jsx';
import Register from './Register.jsx';
import Participants from './Participants.jsx';
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export const eventIDContext = createContext();

const EventsList = () => {
  const [currentEventId, setCurrentEventId] = useState();
  return (
    <Router>
    <div className='container'>
    <eventIDContext.Provider value={[currentEventId, setCurrentEventId]}>
       <Routes>
            <Route path="/" 
            element = {
              <>
                <div className="header">
                <h1 className="events">Events</h1>
                </div>

                <div className="events_item">
                    <EventsPage />
                </div>

               
              </>
            }
            />
            <Route path='/register' element={<Register />} />
            <Route path='/participants' element={<Participants />} />
        </Routes> 
        </eventIDContext.Provider>
    </div>
    </Router>
  )
}

export default EventsList
