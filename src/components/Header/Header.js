import React from 'react';
import {Container} from '../StyledComponents/StyledComponents';
import {Icon, Heading} from './Style'

const Header = (props) => {

  return(
    <Container>
      <Icon />
      <Heading>{props.children}</Heading>
    </Container>
  );
};

export default Header;