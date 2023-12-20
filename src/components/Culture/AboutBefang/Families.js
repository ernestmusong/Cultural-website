import React from 'react';
import { NavLink } from 'react-router-dom';

const Families = () => (
  <>
    <h2>The eight family groups of befang</h2>
    <p>
      Befang is made up of eight family groups namely:
      {' '}
      <br />
      <ol>
        <li>
          Uko-uwong
          {' '}
          <br />
          <NavLink to="/comming-soon">Read more</NavLink>
        </li>
        <li>
          Uko-mandzang
          {' '}
          <br />
          <NavLink to="/comming-soon">Read more</NavLink>
        </li>
        <li>
          Buo-bon
          {' '}
          <br />
          <NavLink to="/comming-soon">Read more</NavLink>
        </li>
        <li>
          Buo-kwo
          {' '}
          <br />
          <NavLink to="/comming-soon">Read more</NavLink>
        </li>
        <li>
          Buo-zang
          {' '}
          <br />
          <NavLink to="/comming-soon">Read more</NavLink>
        </li>
        <li>
          Buo-katche
          {' '}
          <br />
          <NavLink to="/comming-soon">Read more</NavLink>
        </li>
        <li>
          Buo-bezeng
          {' '}
          <br />
          <NavLink to="/comming-soon">Read more</NavLink>
        </li>
        <li>
          Buo-leh
          {' '}
          <br />
          <NavLink to="/comming-soon">Read more</NavLink>
        </li>
      </ol>
      The first five family groups are refered to as Kibien - meaning corners, while the last three
      are refered to as Buo-Ketsm or Matern - meaning center.
    </p>
    <p className="text-bold">
      Women who commited suicide:
      {' '}
      <br />
      These women are often refered to as
      {' '}
      <span className="text-uppercase" style={{ color: 'Var(--lightGreen)' }}>ba-ngon-uwong</span>
      {' '}
      . Ba-ngon-uwong were a group of women who, out of depression, anger, and
      frustrattion committed suicide by voluntrilly holding themselves
      together, and throwing themselves deep down a valley after the death of their husbands.
      It is unclear what led to the death of their husbands, but some people hold that It
      was a German invasion during the German annexation of Cameroon.
    </p>
  </>
);

export default Families;
