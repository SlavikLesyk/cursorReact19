import styled from 'styled-components';

const PRIMARY_COLOR = '#494949';
const SECONDARY_COLOR = '#8fc9f7';
const TERTARY_COLOR  = '#f590b2';
const BG_COLOR = '#121212';

const Input = styled.input`
  border: ${props => {
    switch (props.dataValidation) {
      case 'ok':
        return '#7cf480';
      case 'fail':
        return '#d31926';
      default: 
        return PRIMARY_COLOR;
    }
  }} 1px solid;

  display: block;
  width: 100%;
  margin-bottom: 15px;
  padding: 0 15px;
  line-height: 55px;  
  font-size: 16px;
  color: ${PRIMARY_COLOR};
  background-color: transparent;
  border-radius: 3px;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  padding: 0 20px;
` 
const Form = styled.form`
  margin: 0 auto;
  max-width: 600px;
  border: 1px ${PRIMARY_COLOR} solid;
  padding:50px;
  padding-top: 70px; 
`
const Button = styled.button`
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  line-height: 35px;
  padding: 5px 15px; 
  display: inline-block;
  width : 100%;
  border-radius: 3px;
  background-color: ${SECONDARY_COLOR};
  color: ${BG_COLOR};
  cursor: pointer; 
  transition: all .2s;
  margin-bottom: 25px;

  :hover{
    background-color: ${TERTARY_COLOR};
    transform: translateY(-2px);

  }

  :active{
    transform: translateY(1px); 
  }
`
const LinkStyled = styled.span`
  color: ${SECONDARY_COLOR};
  transition: all .2s;
  display: inline-block;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  :hover{
    border-bottom: 2px solid ${SECONDARY_COLOR};
  }

`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  
  > * {
    flex: 0 1 49%;
    
    &:last-child {
      margin-right: 0;
      margin-left: auto;    
    }
  }
`

export {Container, Form, Input, Button, Row, LinkStyled};