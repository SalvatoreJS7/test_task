import React, { useState, useEffect } from 'react';
import Event from './Event.jsx';
import { Pagination } from 'antd';

const EventsPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(1);

    const onChangePage = (page) => {
        console.log(page);
        setCurrentPage(page);
        fetchAndSetEvents(page);
    };

    const [events, setEvents] = useState([]);
    const fetchAndSetEvents = async (pageNumber) => {
        const response = await fetch(`http://localhost:3001/events?page=${pageNumber}`);
        const data = await response.json();
        console.log('pisa', data);
        setRecordsPerPage(data.recordsPerPage);
        setTotalRecords(data.totalRecords);
        setEvents(data.events);
    };
    useEffect(() => {
        
        fetchAndSetEvents(1);
    }, []);
    

    return (
        <div>
            <div className="events_item_list">
                {events.map((event) => <Event event={event}/>)}
            </div>
            <Pagination current={currentPage} onChange={onChangePage} total={totalRecords} pageSize={recordsPerPage} />
        </div>
    )
}

export default EventsPage
