/* eslint no-tabs: 0 */
import React from 'react';
import { Link } from 'react-router-dom';

const NgienMeetings = () => (
  <main style={{ paddingBottom: '1rem' }}>
    <h1 className="page-hero-text">Ngien Development Forum</h1>
    <h2>Meeting minutes</h2>
    <p>Please select a year and date below to read the meeting minutes</p>
    <h2>Year: 2023</h2>
    <ul style={{ paddingLeft: '0' }}>
      <li>
        Sat 4th Nov, 2023:
        {' '}
        <a href="https://docs.google.com/document/d/1EuyBMytxP7OmVUzjgv__IFCxTH1EBEA3hUAJWHMq360/edit?usp=sharing" target="blank">Read Minutes</a>
      </li>
    </ul>
    <Link to="/ngien" style={{ textDecoration: 'underline', color: 'yellow' }}>
      Go Back
    </Link>
  </main>
);

export default NgienMeetings;
