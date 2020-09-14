import styled from 'styled-components';

// Colors
const greenSeaweed = `rgba(2, 128, 144, 1)`;
const blueQueen = `rgba(69, 105, 144, 1)`;
const redFire = `rgba(244, 91, 105, 1)`;

// Fonts
const fontAsap = "'Asap', sans - serif";

export const StyledSignIn = styled.div`
    /* @import "bourbon"; */

    body {
        background-color: $redFire;
        font-family: $fontAsap;
    }

    .login {
        overflow: hidden;
        background-color: rgba(0,0,0,0.05);
        padding: 40px 30px 30px 30px;
        border-radius: 10px;
        /* position: absolute;
        top: 50%;
        left: 50%; */
        width: 80vw;
        max-width: 500px;
        @include transform(translate(-50%, -50%));
        @include transition(transform 300ms, box-shadow 300ms);
        box-shadow: 5px 10px 10px rgba(${greenSeaweed}, 0.2);
        
        &::before, &::after {
            content: '';
            position: absolute;
            width: 600px;
            height: 600px;
            border-top-left-radius: 40%;
            border-top-right-radius: 45%;
            border-bottom-left-radius: 35%;
            border-bottom-right-radius: 40%;
            z-index: -1;
        }
        
        &::before {
            left: 40%;
            bottom: -130%;
            background-color: rgba(${blueQueen}, 0.15);
            @include animation(wawes 6s infinite linear);
        }
        
        &::after {
            left: 35%;
            bottom: -125%;
            background-color: rgba(${greenSeaweed}, 0.2);
            @include animation(wawes 7s infinite);
        }
        
        > input {
            font-family: ${fontAsap};
            display: block;
            border-radius: 5px;
            font-size: 16px;
            background: white;
            width: 100%;
            border: 0;
            padding: 10px 10px;
            margin: 15px -10px;
        }
        
        > button {
            font-family: ${fontAsap};
            cursor: pointer;
            color: white;
            font-size: 16px;
            text-transform: uppercase;
            /* width: 80px; */
            border: 0;
            padding: 10px 30px;
            margin-top: 10px;
            margin-left: -5px;
            border-radius: 5px;
            background-color: ${redFire};
            @include transition(background-color 300ms);
            
            &:hover {
            background-color: darken(${redFire}, 5%);
            }
        }
    }

    @include keyframes (wawes) {
        from { @include transform(rotate(0)); }
        to { @include transform(rotate(360deg)); }
    }

    a {
        text-decoration: none;
        color: rgba(white, 0.6);
        position: absolute;
        right: 10px;
        bottom: 10px;
        font-size: 12px;
    }
`;