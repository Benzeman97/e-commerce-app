import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from "../logo.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {  ButtonContainer } from "./Button";
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">

         <Link to="/">
           <img src={logo} alt="logo" className="navbar-brand"/>
         </Link>
         <ul className="navbar-nav align-items-center">
              <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
              products
              </Link>
              </li>
         </ul>
         <Link to="/cart" className="ml-auto">
              <ButtonContainer>
                  <span className="mr-2">
                  <FontAwesomeIcon icon={faCartPlus}/>
                  </span>
                 my cart
              </ButtonContainer>
         </Link>

            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
      color: var(--mainWhite) !important;
      font-size:1.3rem;
      text-transform:capitalize;
  }
`;