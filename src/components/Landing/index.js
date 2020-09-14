import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import MainButton from '../Button'
import img from '../../assets/candito.svg'

import { AuthUserContext } from '../Session';

const StyledDiv = styled.div`
  h1 {
    font-weight: 700;
  }

  .loading {
    /* font-family: "Arial Black", "Arial Bold", Gadget, sans-serif; */
    text-transform:uppercase;
    
    width:150px;
    text-align:center;
    line-height:50px;
    
    margin:auto;
    transform:translateY(-50%);
  }

  .loading span {
    position:relative;
    z-index: 100;
    color:#fff;
  }

  .loading:before {
    content:'';
    background: #61bdb620;
    /* border-radius: 10px; */
    width:128px;
    height:36px;
    display:block;
    position:absolute;
    top:0;left:0;right:0;bottom:0;
    margin:auto;
    
    animation:2s loadingBefore infinite ease-in-out;
  }

  @keyframes loadingBefore {
    0%   {transform:translateX(-14px);}
    50%  {transform:translateX(14px);}
    100% {transform:translateX(-14px);}
  }


  .loading:after {
    content:'';
    background:#42f5bf;
    width:10px;
    height:60px;
    display:block;
    position:absolute;
    top:0;left:0;right:0;bottom:0;
    margin:auto;
    opacity:.5;
    
    animation:2s loadingAfter infinite ease-in-out;
  }

  @keyframes loadingAfter {
    0%   {transform:translateX(-50px);}
    50%  {transform:translateX(50px);}
    100% {transform:translateX(-50px);}
  }
`

const Landing = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <StyledDiv>
          <img src={img}></img>
          <h1>POWERBUILDER</h1>

          <p>You're signed in</p>
          <br />
          <div className='loading'><span>{authUser.username}</span></div>
        </StyledDiv>
      ) : (
          <StyledDiv>
            <img src={img}></img>
            <h1>POWERBUILDER</h1>
            <Link to={ROUTES.SIGN_IN}>
              <MainButton text='Sign In' />
            </Link>
          </StyledDiv>
        )
    }
  </AuthUserContext.Consumer>

);

export default Landing;
