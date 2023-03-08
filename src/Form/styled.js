import styled, { keyframes } from "styled-components";

const fieldSetAnimation = keyframes`
from {
    max-height: 0;
} to {
    max-height: 400px;
}
`
const insideFormAnimation = keyframes`
  from {
     opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const StyledError = styled.div`
    padding: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(162, 100%, 90%);
    border: 5px solid ${({ color }) => color === "red" ? color : "rgb(0, 155, 108)"};
    border-radius: 10px;
    color: ${({ color }) => color};
`

export const StyledLegend = styled.legend`
    margin: 0px;
    border: 4px solid rgb(0, 155, 108);
    padding: 0px 10px;
    border-radius: 10px;
    background-color: hsl(162, 100%, 90%);
`;

export const StyledFieldset = styled.fieldset`
    animation: ${fieldSetAnimation} 0.3s; 
    border: 5px solid rgb(0, 155, 108);
    border-radius: 10px;
    background-color: hsl(162, 100%, 90%);
`;

export const StyledSpan = styled.span`
    animation: ${insideFormAnimation} 0.5s cubic-bezier(1, 0, 0.73, 0.72);
    width: 210px;
    display: inline-block;
`;

export const StyledSelect = styled.select`
    animation: ${insideFormAnimation} 0.5s cubic-bezier(1, 0, 0.73, 0.72);
    width: 300px;
    padding: 2px;
    border-radius: 10px;
`;

export const StyledInput = styled.input`
    animation: ${insideFormAnimation} 0.5s cubic-bezier(1, 0, 0.73, 0.72);
    width: 300px;
    border-radius: 10px;
    padding: 5px;
`;

export const StyledButton = styled.button`
    animation: ${insideFormAnimation} 0.5s cubic-bezier(1, 0, 0.73, 0.72);
    transition: 0.2s;
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    border: 3px solid green;
    background-color: rgba(0, 126, 0, 0.301);

    &:active {
        filter: brightness(130%);
    }
`;

export const StyledDate = styled.p`
    animation: ${insideFormAnimation} 0.5s cubic-bezier(1, 0, 0.73, 0.72);
    font-weight: 100;
    font-family: monospace;
    text-align: center;
    margin: 5px;
    font-size: 18px;
`