import React from 'react';
import {NavLink} from 'react-router-dom';
import Header from '../Header/Header';
import {Container, Form, Input, Button, Row, LinkStyled} from '../StyledComponents/StyledComponents';
import Checkbox from '../Checkbox/Checkbox'
import Footer from '../Footer/Footer';

const EMAIL_VALIDATION_EXP = /[0-9a-zA-Z-_]{3,}@[0-9a-zA-Z]{2,}\.[0-9a-zA-Z]{2,}/;
const PASSWORD_VALIDATION_EXP = /(?=.*?[A-Z])(?=.*?[a-z])[0-9a-zA-Z]{8,}/;

class SignIn extends React.Component{
  state = {
    email: 'Email Address*',
    password: 'Password*',
    rememberMe: false,
    isPassword: false,
    emailPlaceholder: true,
    passwordPlaceholder: true,
    emailValidation: "",
    passwordValidation: ""
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  changeInputType = () => {
    this.setState({isPassword: true});
  };

  clearPlaceholder = (event) => {
    if(this.state[event.target.name + 'Placeholder']){
      this.setState({[event.target.name]: ""});
      this.setState({[event.target.name + 'Placeholder']: false});
    }
  };

  toggleCheckbox = () => {
    this.setState((prevState) => {
      return {rememberMe: !prevState.rememberMe}
    })
  }

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
          <Header>Sign in</Header>  
             
          <Input 
            type="email"
            name="email" 
            id="user-email" 
            value={this.state.email} 
            dataValidation={this.state.emailValidation}
            onChange = {(e) =>{
                this.handleInput(e)
                this.validateInput(e,EMAIL_VALIDATION_EXP)
            }}
            onFocus = {(e) => this.clearPlaceholder(e)}
            onBlur = {(e) => this.validateInput(e, EMAIL_VALIDATION_EXP)}
          />

          <Input 
            type={this.state.isPassword ? 'password': 'text'}
            name="password" 
            id="user-password" 
            value={this.state.password}
            dataValidation= {this.state.passwordValidation} 
            onChange = {(e) => {
              this.handleInput(e)
              this.validateInput(e, PASSWORD_VALIDATION_EXP)
            }}
            onFocus = {(e) => {
              this.clearPlaceholder(e);
              this.changeInputType();
            }}
            onBlur = {(e) => this.validateInput(e, EMAIL_VALIDATION_EXP)}
          />

          <Checkbox onChange={this.toggleCheckbox} id="rememberMe"> 
            Remember me
          </Checkbox>
          
          <Button>Sign in</Button>
          <Row>
            <div><LinkStyled>Forgot password?</LinkStyled></div>
            <div style = {{textAlign: "right"}}>
            <NavLink to={'/SignOut'}>
              <LinkStyled>Don't have account? Sign up</LinkStyled>
            </NavLink>
            </div>
          </Row>
          <Footer />
        </Form>   
      </Container>

    );
  }
}

export default SignIn;