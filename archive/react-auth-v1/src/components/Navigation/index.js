import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useOnClickOutside } from '../../hooks';
import FocusLock from 'react-focus-lock';

import { AuthUserContext } from '../Session';

import Menu from './Menu';
import Burger from './Burger';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? (
          <>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} authenticated={true} />
            </FocusLock>
          </>
        ) : (
            <>
              <FocusLock disabled={!open}>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <Menu open={open} setOpen={setOpen} id={menuId} authenticated={false} />
              </FocusLock>
            </>
          )
      }
    </AuthUserContext.Consumer>
  );
}

export default Navigation;
