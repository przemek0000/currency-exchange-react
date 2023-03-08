import styled, { keyframes } from "styled-components";

const clockAnimation = keyframes`
    from{
        opacity: 0;
    } to {
        opacity: 1;
    }
`

export const StyledData = styled.p`
    animation: ${clockAnimation} 0.5s cubic-bezier(1, 0, 0.73, 0.72); 
    font-family: monospace;
    font-weight: 100;
    text-align: end;
    margin: 5px;
    font-size: 18px;
`;