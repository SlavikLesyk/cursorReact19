import React from 'react';
import Header from '../Header/Header';
import {Container, Form, Input, Button, Row, LinkStyled} from '../StyledComponents/StyledComponents';
import Checkbox from '../Checkbox/Checkbox';
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom';

const NAME_VALIDATION_EXP = /[a-zA-Z]{3,}/;
const EMAIL_VALIDATION_EXP = /[0-9a-zA-Z-_]{3,}@[0-9a-zA-Z]{2,}\.[0-9a-zA-Z]{2,}/;
const PASSWORD_VALIDATION_EXP = /(?=.*?[A-Z])(?=.*?[a-z])[0-9a-zA-Z]{8,}/;

class SignOut extends React.Component{
  state = {
    email: 'Email Address*',
    password: 'Password*',
    firstName: 'First name*',
    lastName: 'Last name*',
    receiveMsg: false,
    isPassword: false,
    emailPlaceholder: true,
    passwordPlaceholder: true,
    firstNamePlaceholder: true,
    lastNamePlaceholder: true,
    emailValidation: "",
    passwordValidation: "",
    firstNameValidation: "",
    lastNameValidation: ""

  }  

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  changeInputType = () => {
    this.setState({isPassword: true});
  };

  toggleCheckbox = () => {
    this.setState((prevState) => {
      return {rememberMe: !prevState.rememberMe}
    })
  }

  clearPlaceholder = (event) => {
    if(this.state[event.target.name + 'Placeholder']){
      this.setState({[event.target.name]: ""});
      this.setState({[event.target.name + 'Placeholder']: false});
    }
  };

  validateInput = (event, exp) => {
    if(exp.test(event.target.value) && !this.state[event.target.name + 'Placeholder']){
      return this.setState({[event.target.name + 'Validation']: 'ok'})
    }
    if(!exp.test(event.target.value)){
      return this.setState({[event.target.name + 'Validation']: 'fail'})
    }    
  }

  render(){
    return (
      <Container>        
        <Form>   
          <Header>Sign out</Header> 

          <Row>
            <Input 
              name="firstName" 
              id="firsrName" 
              value={this.state.firstName} 
              dataValidation = {this.state.firstNameValidation}
              onChange = {(e) => {
                this.handleInput(e)
                this.validateInput(e, NAME_VALIDATION_EXP)
              }}
              onFocus = {(e) => this.clearPlaceholder(e)}
              onBlur={(e) => this.validateInput(e, NAME_VALIDATION_EXP)}
            />

            <Input 
              name="lastName" 
              id="lastName" 
              value={this.state.lastName} 
              dataValidation = {this.state.lastNameValidation}
              onChange = {(e) => {
                this.validateInput(e, NAME_VALIDATION_EXP)
                this.handleInput(e)
              }}
              onFocus = {(e) => this.clearPlaceholder(e)}
              onBlur={(e) => this.validateInput(e, NAME_VALIDATION_EXP)}
            />
          </Row>   

          <Input 
            type="email"
            name="email" 
            id="userEmail" 
            value={this.state.email} 
            dataValidation = {this.state.emailValidation}
            onChange = {e => {
              this.handleInput(e)
              this.validateInput(e, EMAIL_VALIDATION_EXP)
            }}
            onFocus = {(e) => this.clearPlaceholder(e)}
            onBlur={(e) => this.validateInput(e, EMAIL_VALIDATION_EXP)}
          />

          <Input 
            type={this.state.isPassword ? 'password': 'text'}
            name="password" 
            id="userPassword" 
            value={this.state.password}
            dataValidation= {this.state.passwordValidation}
            onChange = {e => {
              this.handleInput(e, 'password')
              this.validateInput(e,PASSWORD_VALIDATION_EXP)
            }} 
            onFocus = {(e) => {
              this.clearPlaceholder(e);
              this.changeInputType();              
            }} 
            onBlur={(e) => this.validateInput(e,PASSWORD_VALIDATION_EXP)}
          />

          <Checkbox onChange={this.toggleCheckbox} id="receiveMsg"> 
            I want ro receive inspiration, marketing promotions and updates via email.
          </Checkbox>
          
          <Button type="submit">Sign out</Button>

          <Row>
            <div style = {{textAlign: "right"}}>
              <NavLink to="/SignIn">
                <LinkStyled >Already have an account? Sign in</LinkStyled>
              </NavLink>
            </div>
          </Row>
          <Footer />
        </Form>
      </Container>
    );
  }
}

export default SignOut;