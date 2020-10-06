import React from 'react';
import {Label, CheckboxContainer} from './Style';

const Checkbox = (props) => {
  return(
      <CheckboxContainer>      
          <input type="checkbox" onChange={props.onChange} name={props.name} id={props.id} />    
          <Label htmlFor={props.id}>{props.children}</Label>
      </CheckboxContainer>
  )
}

export default Checkbox;