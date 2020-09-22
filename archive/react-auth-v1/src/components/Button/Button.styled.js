import styled from 'styled-components';

export const StyledButton = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,400;0,600;0,700;1,200&display=swap');

    .wrap {
        /* height: 100%; */
        /* display: flex; */
        align-items: center;
        justify-content: center;
        z-index: 0;
    }

    .button {
        min-width: 300px;
        min-height: 60px;
        /* font-family: 'Nunito', sans-serif; */
        font-size: 22px;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 1.3px;
        font-weight: 700;
        /* color: #313133; */
        background: #4FD1C5;
        background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);
        border: none;
        border-radius: 1000px;
        box-shadow: 12px 12px 24px rgba(79,209,197,.64);
        transition: all 0.3s ease-in-out 0s;
        cursor: pointer;
        outline: none;
        position: relative;
        padding: 10px;
    }

    button::before {
    content: '';
    border-radius: 1000px;
    min-width: calc(300px + 12px);
    min-height: calc(60px + 12px);
    border: 6px solid #00FFCB;
    box-shadow: 0 0 60px rgba(0,255,203,.64);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all .3s ease-in-out 0s;
    }

    .button:hover, .button:focus {
    color: #313133;
    transform: translateY(-6px);
    }

    button:hover::before, button:focus::before {
    opacity: 1;
    }

    button::after {
    content: '';
    width: 30px; height: 30px;
    border-radius: 100%;
    border: 6px solid #00FFCB;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ring 1.5s infinite;
    }

    button:hover::after, button:focus::after {
    animation: none;
    display: none;
    }

    @keyframes ring {
    0% {
        width: 30px;
        height: 30px;
        opacity: 0.8;
    }
    100% {
        width: 300px;
        height: 300px;
        opacity: 0;
    }
    }
`;