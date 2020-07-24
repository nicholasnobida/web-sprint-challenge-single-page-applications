import React from "react";
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import Order from './Order';
import styled from 'styled-components';

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background: white;
  margin: 0;
  `;
const NavText = styled.p`
  font-size: 1.6rem;
  padding: 0 3%;
  text-decoration: none;
  `;
const Logo = styled.h1`
  font-size: 2rem;
  color: black;
  padding-left: 1%;
  `;
const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;
  color: black;
  `;

const App = () => {
  return (
    <>
      <Nav>
      <Logo>Lambda Eats</Logo>
      <NavLinks>
        <NavText><Link to='/'>Home</Link></NavText>
        <NavText><Link to='/pizza'>Order Now</Link></NavText>
      </NavLinks>
      </Nav>
      <Route exact path='/' component={Home}></Route>
      <Route path='/pizza' component={Order}></Route>
    </>
  );
};
export default App;
