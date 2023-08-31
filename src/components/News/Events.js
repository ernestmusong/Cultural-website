import React from 'react';
import { useSelector } from 'react-redux';
import Event from './Event';

const Events = () => {
  const { events } = useSelector((store) => store.events);
  return (
    <>
      <div className="posts-container">
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </div>
    </>
  );
};

export default Events;
