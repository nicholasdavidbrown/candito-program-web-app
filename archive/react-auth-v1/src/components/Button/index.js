import React from 'react';
import { StyledButton } from './Button.styled';

const MainButton = (props) => (
    <StyledButton>
        <div class="wrap">
            <button class='button'>{props.text}</button>
        </div>
    </StyledButton>
);

export default MainButton;