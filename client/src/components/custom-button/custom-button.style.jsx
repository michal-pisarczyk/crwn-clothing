import styled, { css } from "styled-components";

const regularButton = css`
  background-color: #000000;
  color: #ffffff;
  border: none;

  &:hover {
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #000000;
  }
`;

const googleButton = css`
  background-color: #4285f4;
  color: #ffffff;
  border: none;

  &:hover {
    background-color: #357ae8;
  }
`;

const invertedButton = css`
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000;

  &:hover {
    background-color: #000000;
    color: #ffffff;
    border: none;
  }
`;

const getPropSpecificButton = props => {
  if (props.isGoogleSignIn) {
    return googleButton;
  }
  return props.isInverted ? invertedButton : regularButton;
};

export const StyledCustomButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 0 35px;
  width: auto;
  min-width: 165px;
  height: 50px;
  font: bolder 15px/48px "Open Sans Condensed", sans-serif;
  text-transform: uppercase;
  letter-spacing: .5px;
  cursor: pointer;

  ${ getPropSpecificButton }
`;
