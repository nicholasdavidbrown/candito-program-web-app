import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

import { Link } from 'react-router-dom';

import { AuthUserContext } from '../../Session';
import SignOutButton from '../../SignOut';
import * as ROUTES from '../../../constants/routes';
// import * as ROLES from '../../constants/roles';

const Menu = ({ open, ...props }) => {

    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <a href="/" tabIndex={tabIndex}>
                <span aria-hidden="true">💁🏻‍♂️</span>
                About us
            </a>
            <a href="/" tabIndex={tabIndex}>
                <span aria-hidden="true">💸</span>
                Pricing
            </a>
            <a href="/" tabIndex={tabIndex}>
                <span aria-hidden="true">📩</span>
                Contact
            </a>
        </StyledMenu>
    )
}

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;

{/* <a href="/" tabIndex={tabIndex}>
    <span aria-hidden="true">💁🏻‍♂️</span>
                Inputs
            </a>
    <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true">💸</span>
                Week 1
            </a> */}