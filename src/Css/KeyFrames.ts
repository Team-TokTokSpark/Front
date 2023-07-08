import { keyframes } from "styled-components";

export const rotate = keyframes`
    0%{transform:rotate(0deg)}
    100%{transform: rotate(360deg)}
`;

export const arrow_wave = keyframes`
    0% {opacity: 0;}
    50% {opacity: 0.5;}
    100% {opacity: 1;}
    
`;

export const arrow_down = keyframes`
    0%{top:70%;}
    50%{top:75%;}
    100%{top:70%;}
`;

export const typing = keyframes`
    0%{
        width:0;

    }
    100%{
        width:10ch;
    }
`;

export const blinking = keyframes`
50%{
    opacity:0;
}
`;
