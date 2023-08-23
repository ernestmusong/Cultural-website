import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Counter() {
  const { branches } = useSelector((store) => store.branches);
  return (
    <div className="container-in-banner">
        {branches.map(branch => (
        <Link to={branch.link} style={{ textDecoration: "none" }} key={branch.id}>
               <div className="text-center count-up-wrapper" >
                <div className="counter-wrapper">
                <h6 className=" text-capitalize" style={{color: "var(--mainOrange)"}}>{branch.name}</h6>
               <h1 className="value">
                <CountUp end={branch.value} redraw={true}>
                              {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                          </VisibilitySensor>
                      )}
                 </CountUp>
                </h1>
               <h6 className=" text-capitalize"  style={{color: "var(--mainOrange)" }}>{branch.text}</h6>
                </div>
           </div>
         </Link>
          ))}
        </div>
  )
}

export default Counter