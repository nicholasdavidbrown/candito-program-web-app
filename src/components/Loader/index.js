import React from "react"
import styled from "styled-components"

const StyledLoader = styled.div`
    .centered {
        height: 100vh;
        width: 100vw;
        background-color: #181924;
        margin: auto;
    }

    .lds-ring {
        display: block;
        position: relative;
        width: 80px;
        height: 80px;
        margin: auto;
        text-align: center;
    }

    .lds-ring div {
        box-sizing: border-box;
        height: 100vh;
        width: 100vw;
        /* display: block; */
        position: absolute;
        width: 64px;
        height: 64px;
        margin-top: 200px;
        border: 8px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
        /* margin: auto; */
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

function Loader() {
    return (
        <StyledLoader>
            <div class="centered">
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
        </StyledLoader>
    )
}

// Loader.propTypes = {
//     headerText: PropTypes.string.isRequired
// }

export default Loader