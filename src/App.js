import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import logo from "./becuda-logo.png";
import {FaAlignJustify, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllProjects from "./components/Projects/AllProjects";
import Events from "./components/News/Events";
import SingleEvent from "./components/News/SingleEvent";
import AuthService from "./services/auth.service";
import Login from "./components/General/login.component";
import Register from "./components/General/register.component";
import Home from "./components/Home/home.component";
import Profile from "./components/Dashboard/profile.component";
import BoardUser from "./components/Dashboard/board-user.component";
import BoardModerator from "./components/Dashboard/board-moderator.component";
import BoardAdmin from "./components/Dashboard/board-admin.component";
import Footer from "./components/General/footer";
import SingleProject from "./components/Projects/SingleProject";
import Icon from "./components/Home/Icon";
import  PopupModal from "./components/General/PopupModal";
import EventBus from "./common/EventBus";
import BefangYouthsInitiative from "./components/Branches/BEYOIN/BefangYouthsInitiative";
import CommingSoon from "./components/General/CommingSoon";
import ContributePage from "./components/Contributions/ContributePage";
import ContributeDetails from "./components/Contributions/ContributeDetails";
import BeyoinMember from "./components/Branches/BEYOIN/BeyoinMember";
import ListOfSupporters from "./components/Web-creator/ListOfWebSupporters";
import ListOfContributors from "./components/Contributions/ListOfContributors";
import WebCreator from "./components/Web-creator/WebCreator";
import BefangDiaspora from "./components/Branches/Diaspora/BefangDiaspora";
import DiasporaMember from "./components/Branches/Diaspora/DiasporaMember";
import Constitution from "./components/General/Constitution";
 

class App extends Component {
  
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.clearHeight = this.clearHeight.bind(this);
    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      height: 0,
      linksHeight: 0,
      overFlow: "hidden",
       
    };
  }
  
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }
  

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }
   
   clearHeight (){
    const height = this.state.height;
    if(height !== 0){
      this.setState({height:0, overFlow: "hidden"})
    }
  }
    
   handleClickMenu() {
    const height = this.state.height;
    if(height === 0){this.setState({height:"auto", overFlow: ""}) }
    
  }
  render() {
    const { currentUser, showModeratorBoard, showAdminBoard, height, overFlow } = this.state;
    return (
      <>
            {/*top nav*/}
 <div className="top-nav">
  {/*Logo*/}
 <Link to='/'>
   <div style={{width: "250px"}}>
      <img src= {logo} alt="logo" className="logo" style={{maxWidth: "100%"}} />
  </div> 
 </Link>
   {/*Support menu*/}
  <div className="support">
      <Link to="/web-creator" className="support">
      Click here to support the website
      </Link>
      <Link to="/web-supporters" className="support">
           See List Of Supporters
      </Link>
  </div>
{/*Location*/}
<a href="/" style={{color: "var(--mainOrange)"}}>
  <FaMapMarkerAlt style={{marginRight: "1rem"}} />
  <span>Cameroon, North West Region, Menchum Valley Sub Division.</span>
</a>
</div>
{/*end top nav*/}
{/*Navigation*/}
<nav id="nav">
<div className="nav-center">
<div className="nav-header">
  {/*Mobile logo*/}
  <div className='mobile-logo-container'>
  <Link to='/' onClick={() => {this.clearHeight()}}>
     <div style={{width: "100px", height: "100%"}} className="logo-div">
      <img src={logo} alt="logo" className="logo" style={{maxWidth: "100%"}}/>
    </div> 
    </Link>
  </div>
  {/*Mobile support menu*/}
  <div className="moble-support">
      <Link to="/web-creator" className="support"  onClick={() => {this.clearHeight()}}>
         Click to support the website
      </Link>
      <Link to="/web-supporters" className="support" onClick={() => {this.clearHeight()}}>
           See List Of Supporters
      </Link>
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
  <Link to="/" className='clear'  onClick={() => {this.clearHeight()}}>
   Home
  </Link>
  <div className="dropdown">
  <Link to="#">branches</Link>
  <div className="dropdown-content">
         <Link to="/comming-soon" className="clear dropdown-link"  onClick={() => {this.clearHeight()}}>
            bemenda
          </Link>
          <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             buea
          </Link>
          <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             muea
          </Link>
          <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             Mutengene
          </Link>
          <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             Limbe
          </Link>
          <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             Douala
          </Link>
          <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             Yaounde
          </Link>
          <Link to="/diaspora" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             diaspora
          </Link>
      </div>
      
  </div>
  <Link to="/all-projects" className='clear' onClick={() => {this.clearHeight()}}>
  Projects
  </Link>
  <div className="dropdown">
  <Link to="#" style={{zIndex:"-1"}}>associations</Link>
  <div className="dropdown-content">
         <Link to="/befang-youths-initiative" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
            Befang Youths Initiative
          </Link>
          <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             Befang Youths Association
          </Link>
      </div>
  </div>
  <div className="dropdown">
  <Link to="#" style={{zIndex:"-1"}}>culture</Link>
  <div className="dropdown-content">
         <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
            About Befang
          </Link>
         <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
            marriage
          </Link>
          <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             annual dance
          </Link>
          <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             funeral
          </Link>
          <Link to="/comming-soon" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
             The dialect
          </Link>
      </div>
  </div>
  <Link to="/constitution" className='clear'  onClick={() => {this.clearHeight()}}>
   Constitution
  </Link>
  <Link to="/events" className='clear' onClick={() => {this.clearHeight()}}>
   News
  </Link>
  <div className="dropdown">
  <Link to="#" style={{zIndex:"-1"}}>contributions</Link>
  <div className="dropdown-content">
         <Link to="/contributors" className="clear dropdown-link" onClick={() => {this.clearHeight()}}>
            Water Project
          </Link>
      </div>
  </div>
  {showModeratorBoard && (
  
    <Link to={"/mod"}>
      Moderator Board
    </Link>

)}

  {showAdminBoard && (
   
    <Link to={"/admin"}>
      Admin Board
    </Link>
   
)}
{showAdminBoard && (
   
   <Link to={"/users"}>
     users
   </Link>
  
)}

 {currentUser && (
   
    <Link to={"/user"}>
      dashboard
    </Link>
  
)}

{currentUser ? (
  
<div style={{display: "flex", justifyContent: "spaceBetween", width: "10%"}}>
   
    <Link to={"/profile"}>
      {currentUser.username}
    </Link>
   
   
    <a href="/"  onClick={()=>this.logOut()} className="clear ml-2" >
      LogOut
    </a>
   
</div>
) : (
<div className="register-link">
  
    <Link to={"/login"} className="clear nav-link" onClick={() => {this.clearHeight()}} >
      Login
    </Link>
   

   
    <Link to={"/register"} className="clear nav-link" onClick={() => {this.clearHeight()}}>
      Register
    </Link>
   
</div>
)}
    </div>
       
  </div>
</div>
</nav>
{/*News bar*/}
<div className='info-wrapper'>
  <p className='info text-uppercase'>
 Welcome to the befang cultural and development association...<span className="text-uppercase">becuda</span>
  </p>
</div>
{/*End news bar*/}
          <PopupModal />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/all-projects" component={AllProjects} />
            <Route path="/projects/:projectId" component={SingleProject} />
            <Route path="/events" component={Events} />
            <Route path="/event/:eventId" component={SingleEvent} />
            <Route path="/icons/:iconId" component={Icon} />
            <Route path="/befang-youths-initiative" component={BefangYouthsInitiative} />
            <Route path="/contribute-page" component={ContributePage} />
            <Route path="/contributors" component={ListOfContributors} />
            <Route path="/branches/:branchId" component={ContributeDetails} />
            <Route path="/diaspora" component={BefangDiaspora} />
            <Route path="/diaspora-member/:diasporaId" component={DiasporaMember} />
            <Route path="/beyoin/:memberId" component={BeyoinMember} />
            <Route path="/web-supporters" component={ListOfSupporters} />
            <Route path="/web-creator" component={WebCreator} />
            <Route path="/constitution" component={Constitution} />
            <Route path="/comming-soon" component={CommingSoon} />
             
          </Switch>
          <Footer />

        </>
    );
  }
}

export default App;
