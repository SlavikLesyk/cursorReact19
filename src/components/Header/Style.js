import styled from 'styled-components';
import padlock from '../../img/padlock.svg';

const Icon = styled.div`
  height: 50px;
  width: 50px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: #f590b2;
  background-image: url(${padlock});
  background-position: center center;
  background-size: 70%;
  background-repeat: no-repeat;
`;

const Heading = styled.h1`
  font-size: 24px;
  color: #fff;
  text-align: center;
  margin-bottom 25px;
`;

export {Icon, Heading};