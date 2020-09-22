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
            <AuthUserContext.Consumer>
                {authUser =>
                    authUser ? (
                        <NavigationAuth authUser={authUser} />
                    ) : (
                            <NavigationNonAuth />
                        )
                }
            </AuthUserContext.Consumer>
        </StyledMenu>
    )
}

const NavigationAuth = ({ authUser }) => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        {!!authUser.roles[ROLES.ADMIN] && (
            <li>
                <Link to={ROUTES.ADMIN}>Admin</Link>
            </li>
        )}
        <li>
            <SignOutButton />
        </li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);

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