import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import EventDetails from './EventDetails';

const EventDetailsPage = () => {
  const { id } = useParams();
  const { events } = useSelector((store) => store.events);
  const event = events.find((event) => event.id === id);
  return (

    <>
      <EventDetails event={event} />
    </>

  );
};

export default EventDetailsPage;
