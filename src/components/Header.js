import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import {FaAlignJustify, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import logo from '../assets/Frame.png';
import { Button } from 'react-bootstrap/lib/InputGroup';

const links = [
  { path: '/home', text: 'Cars' },
  { path: '/make-reservations', text: 'Reserve a car', id: 'border' },
  { path: '/my-reservations', text: 'My reservations' },
  { path: '/add-car', text: 'Add car' },
  { path: '/delete-car', text: 'Delete car' },
];
const branches = [
  { path: '/home', text: 'bamenda', className:"clear dropdown-link" },
  { path: '/make-reservations', text: 'buea', className:"clear dropdown-link", id: 'border' },
  { path: '/my-reservations', text: 'muea, className:"clear dropdown-link"' },
  { path: '/add-car', text: 'mutengene', className:"clear dropdown-link" },
  { path: '/delete-car', text: 'limbe', className:"clear dropdown-link" },
  { path: '/delete-car', text: 'douala', className:"clear dropdown-link" },
  { path: '/delete-car', text: 'yaounde', className:"clear dropdown-link" },
  { path: '/delete-car', text: 'diaspora', className:"clear dropdown-link" },
];
const associations = [
  { path: '/home', text: 'befang youths initiative' },
  { path: '/make-reservations', text: 'befang youths association'},
];
const culture = [
  {id:1, path: '/home', text: 'about befang' },
  {id:2, path: '/make-reservations', text: 'marriage'},
  {id:3, path: '/make-reservations', text: 'cultural dance'},
  {id:4, path: '/make-reservations', text: 'funeral'},
  {id:5, path: '/make-reservations', text: 'The dialect'},
];
const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/login');
  };
  return (
    <>
            {/*top nav*/}
            <div className="top-nav">
  {/*Logo*/}
 <NavLink to='/'>
   <div style={{width: "250px"}}>
      <img src= {logo} alt="logo" className="logo" style={{maxWidth: "100%"}} />
  </div> 
 </NavLink>
   {/*Support menu*/}
  <div className="support">
      <NavLink to="/web-creator" className="support">
      Click here to support the website
      </NavLink>
      <NavLink to="/web-supporters" className="support">
           See List Of Supporters
      </NavLink>
  </div>
{/*Location*/}
<a href="/" style={{color: "var(--mainOrange)"}}>
  <FaMapMarkerAlt style={{marginRight: "1rem"}} />
  <span>Cameroon, North West Region, Menchum Valley Sub Division.</span>
</a>
</div>
{/*Navigation*/}
<nav id="nav">
<div className="nav-center">
<div className="nav-header">
  {/*Mobile logo*/}
  <div className='mobile-logo-container'>
  <NavLink to='/' onClick={() => {this.clearHeight()}}>
     <div style={{width: "100px", height: "100%"}} className="logo-div">
      <img src={logo} alt="logo" className="logo" style={{maxWidth: "100%"}}/>
    </div> 
    </NavLink>
  </div>
  {/*Mobile support menu*/}
  <div className="moble-support">
      <NavLink to="/web-creator" className="support"  onClick={() => {this.clearHeight()}}>
         Click to support the website
      </NavLink>
      <NavLink to="/web-supporters" className="support" onClick={() => {this.clearHeight()}}>
           See List Of Supporters
      </NavLink>
  </div>
  {/*Mobile menu open and close*/}
  {this.state.height === 0 ? (
      <div className="nav-toggle target" onClick={() => {this.handleClickMenu()}}>
      <FaAlignJustify className="target" style={{color:"var(--mainOrange)"}} />
    </div>
  ) : ( <div className=" nav-toggle"onClick={() => {this.clearHeight()}}>
         <FaTimes style={{color:"var(--mainOrange)"}}/>
     </div>)}
</div>
{/*Menu*/}
<div id='links-container' className="links-container target" style={{ height: height, overflow: overFlow}}>
  <div className="links target"  >
  <NavLink to="/" className='clear'  onClick={() => {this.clearHeight()}}>
   Home
  </NavLink>
  <div className="dropdown">
  <NavLink to="#">branches</NavLink>
  <div className="dropdown-content">
    {branches.map((b) => <NavLink to={b.path} className={b.className} onClick={() => {this.clearHeight()}}>{b.text}</NavLink>)}
      </div>
      
  </div>
  <NavLink to="/all-projects" className='clear' onClick={() => {this.clearHeight()}}>
  Projects
  </NavLink>
  <div className="dropdown">
  <NavLink to="#" style={{zIndex:"-1"}}>associations</NavLink>
  <div className="dropdown-content">
          {associations.map((a) => <NavLink to={a.path} className={a.className} onClick={() => {this.clearHeight()}}>{a.text}</NavLink>)}
      </div>
  </div>
  <div className="dropdown">
  <NavLink to="#" style={{zIndex:"-1"}}>culture</NavLink>
  <div className="dropdown-content">
          {culture.map((b) => <NavLink to={c.path} className={c.className} onClick={() => {this.clearHeight()}}>{c.text}</NavLink>)}
      </div>
  </div>
  <NavLink to="/constitution" className='clear'  onClick={() => {this.clearHeight()}}>
   Constitution
  </NavLink>
  <NavLink to="/events" className='clear' onClick={() => {this.clearHeight()}}>
   News
  </NavLink>
  <div className="dropdown">
  <NavLink to="#" style={{zIndex:"-1"}}>contributions</NavLink>
  <div className="dropdown-content">
         <NavLink to="/contributors" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
            Water Project
          </NavLink>
      </div>
  </div>
  {showModeratorBoard && (
  
    <NavLink to={"/mod"}>
      Moderator Board
    </NavLink>

)}

  {showAdminBoard && (
   
    <NavLink to={"/admin"}>
      Admin Board
    </NavLink>
   
)}
{showAdminBoard && (
   
   <NavLink to={"/users"}>
     users
   </NavLink>
  
)}

 {currentUser && (
   
    <NavLink to={"/user"}>
      dashboard
    </NavLink>
  
)}

{currentUser ? (
  
<div style={{display: "flex", justifyContent: "spaceBetween", width: "10%"}}>
   
    <NavLink to={"/profile"}>
      {currentUser.username}
    </NavLink>
   
   
    <a href="/"  onClick={()=>this.logOut()} className="clear ml-2" >
      LogOut
    </a>
   
</div>
) : (
<div className="register-link">
  
    <button className="clear nav-link" onClick={() => {this.clearHeight()}} >
      Login
    </button>
   

   
    <button to={"/register"} className="clear nav-link" onClick={() => {this.clearHeight()}}>
      Register
    </button>
   
</div>
)}
    </div>
       
  </div>
</div>
</nav>
    </>
  );
};

export default Header;