import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Event from '../News/Event';

const LatestNews = () => {
  const { events } = useSelector((store) => store.events);
  const latestEvents = events.slice(events.length - 3, events.length);
  return (
    <>
      <section className="latest-news mb-4">
        {latestEvents.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </section>

      <button type="button" className="home-btn">
        <Link to="/events">go to news page</Link>
      </button>

    </>
  );
};

export default LatestNews;
