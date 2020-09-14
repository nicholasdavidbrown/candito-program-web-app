import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

import { Link } from 'react-router-dom';

import { AuthUserContext } from '../../Session';
import SignOutButton from '../../SignOut';
import * as ROUTES from '../../../constants/routes';
// import * as ROLES from '../../constants/roles';

const Menu = ({ open, setOpen, authenticated, ...props }) => {

    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;

    if (authenticated) {
        return <NavigationAuth tabIndex={tabIndex} isHidden={isHidden} open={open} setOpen={setOpen} {...props} />
    } else {
        return <NavigationNonAuth tabIndex={tabIndex} isHidden={isHidden} open={open} setOpen={setOpen} {...props} />
    }
}

const NavigationAuth = ({ isHidden, tabIndex, open, setOpen, ...props }) => {
    // const isHidden = open ? true : false;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} open={open} {...props}>
            {/* <a tabIndex={tabIndex}>
                <span aria-hidden="true">💁🏻‍♂️</span>
                <Link to={ROUTES.LANDING} onClick={() => setOpen(false)}>Landing</Link>
            </a> */}
            <a tabIndex={tabIndex}>
                <span aria-hidden="true">💪</span>
                <Link to={ROUTES.HOME} onClick={() => setOpen(false)}> Home</Link>
            </a>
            {/* <a tabIndex={tabIndex}>
                <span aria-hidden="true">📩</span>
                <Link to={ROUTES.ACCOUNT} onClick={() => setOpen(false)}> Account</Link>
            </a> */}
            <hr />
            <a tabIndex={tabIndex} >
                <SignOutButton />
            </a>
        </StyledMenu>
    )
};

const NavigationNonAuth = ({ isHidden, tabIndex, open, setOpen, ...props }) => {
    // const isHidden = open ? true : false;

    return (
        <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
            <a tabIndex={tabIndex}>
                <span aria-hidden="true">💁🏻‍♂️</span>
                <Link to={ROUTES.LANDING} onClick={() => setOpen(false)}>Landing</Link>
            </a>
            <a tabIndex={tabIndex}>
                <span aria-hidden="true">💸</span>
                <Link to={ROUTES.SIGN_IN} onClick={() => setOpen(false)}>Sign In</Link>
            </a>
        </StyledMenu>
    )
};

Menu.propTypes = {
    open: bool.isRequired,
}

export default Menu;