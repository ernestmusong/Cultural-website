import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import AuthService from "../../services/auth.service";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { firstName: "", title:"" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        {(this.state.userReady) ?
        <div>
        <header className="jumbotron">
         
          <h3>
           Welcome <strong>{currentUser.title} {currentUser.firstName}</strong> you're a great son of befang !
          </h3>
          <p>
          Please help support the maintenance and continued development of this website by making a small contribution to<strong className="text-danger"> (+237) 676308067</strong><br/>
          Whatever you donate will be highly appreciated. <Link to="/web-supporters">See supporters.</Link><br/> Thanks!
          </p>
             <Link to="/comming-soon">
               Your contributions.
              </Link>
        </header>
         
      </div>: null}
      </div>
    );
  }
}
