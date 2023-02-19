import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../../services/auth.service";

 const required = value => {
   if (!value) {
     return (
       <div className="alert alert-danger" role="alert">
         This field is required!       
         </div>
     );
   }
 };

 const email = value => {
   if (!isEmail(value)) {
     return (
       <div className="alert alert-danger" role="alert">
         This is not a valid email.
       </div>
     );
   }
 };
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeBranch = this.onChangeBranch.bind(this);
    this.onChangeSocialGroup = this.onChangeSocialGroup.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.state = {
      title:"",
      branch: "",
      socialGroup: "",
      firstName:"",
      lastName:"",
      username: "",
      email: "",
      password: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeSocialGroup(e) {
    this.setState({
      socialGroup: e.target.value
    });
  }

  onChangeBranch(e) {
    this.setState({
      branch: e.target.value
    });
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.title,
        this.state.firstName,
        this.state.lastName,
        this.state.username,
        this.state.email,
        this.state.branch,
        this.state.socialGroup,
        this.state.password,
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },

        () => {
          this.props.history.push("/login");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      
        <div className="signup-component">
          <Form className='register-form'
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                 
                   <div className="form-row mx-auto">
                   <div className="form-group col-lg-2">
                  <label style={{color:"Var(--softWhite)"}} htmlFor="branch">Title</label>
                  <Select
                    className="form-control"
                    name="branch"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    validations={[required]}>
                       <option value=""></option>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Miss">Miss</option>
                    
                  </Select>
                </div>
                <div className="form-group col-lg-2">
                  <label style={{color:"Var(--softWhite)"}} htmlFor="firstname">firstName</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="firstname"
                    value={this.state.firstName}
                    onChange={this.onChangeFirstName}
                    validations={[required]}
                  />
                </div>
               
                <div className="form-group col-lg-2">
                  <label style={{color:"Var(--softWhite)"}} htmlFor="lastname">Last Name</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="lastname"
                    value={this.state.lastName}
                    onChange={this.onChangeLastName}
                    validations={[required]}
                  />
                </div>
              </div>


                <div className="form-row mx-auto">
                <div className="form-group col-lg-3">
                  <label style={{color:"Var(--softWhite)"}} htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required]}
                  />
                </div>
               
                <div className="form-group col-lg-3">
                  <label style={{color:"Var(--softWhite)"}} htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[email]}
                  />
                </div>
              </div>


               
              <div className="form-row mx-auto">
                <div className="form-group col-lg-3">
                  <label style={{color:"Var(--softWhite)"}} htmlFor="branch">Branch</label>
                  <Select
                    className="form-control"
                    name="branch"
                    value={this.state.branch}
                    onChange={this.onChangeBranch}
                    validations={[required]}>
                       <option value=""></option>
                                    <option value="Yaounde">Yaounde</option>
                                    <option value="Douala">Douala</option>
                                    <option value="Bamenda">Bamenda</option>
                                    <option value="Buea">Buea</option>
                                    <option value="Limbe">Limbe</option>
                                    <option value="Muea">Muea</option>
                                    <option value="Mutengene">Mutengene</option>
                                    <option value="Diaspora">Diaspora</option>
                    
                  </Select>
                </div>
                <div className="form-group col-lg-3">
                  <label style={{color:"Var(--softWhite)"}} htmlFor="social group">Sub Group (optional)</label>
                  <select
                    className="form-control"
                    name="socialgroup"
                    value={this.state.socialGroup}
                    onChange={this.onChangeSocialGroup}
                     >
                       <option value=""></option>
                                    <option value="Befang Youths Initiative">Befang Youths Initiative</option>
                                    <option value="BEYOCUDA">BEYOCUDA</option>
                                    
                    
                  </select>
                </div>
                
              </div>

              <div className="form-row mx-auto">
                <div className="form-group col-lg-6 ">
                  <label style={{color:"Var(--softWhite)"}} htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]}
                  />
                </div>
              </div>
              <div className="form-row mx-auto">
                <div className="form-group col-lg-6">
                  <button className="btn btn-primary btn-block">Register</button>
                </div>
            </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      
    );
  }
}

 