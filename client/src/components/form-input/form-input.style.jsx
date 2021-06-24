import styled, { css } from "styled-components";

const prominentColour = "black";
const ordinaryColour = "gray";

const labelCss = css`
  position: absolute;
  left: 5px;
  font-weight: normal;
  pointer-events: none;
`;

const largeLabelCss = css`
  top: 10px;
  font-size: 16px;
  color: ${ ordinaryColour };
`;

const smallLabelCss = css`
  top: -14px;
  font-size: 12px;
  color: ${ prominentColour };
`;

export const InputField = styled.input`
  display: block;
  padding: 10px 10px 10px 5px;
  margin: 25px 0;
  width: 100%;
  font-size: 18px;
  background: none;
  background-color: white;
  color: ${ ordinaryColour };
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${ ordinaryColour };

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${ smallLabelCss }
  }
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 45px 0;

  ${ InputField }[type="password"] {
    letter-spacing: .3em;
  }
`;

export const FullSizeLabel = styled.label`
  ${ labelCss }
  ${ largeLabelCss }
  transition: all 300ms;
`;

export const MinifiedLabel = styled.label`
  ${ labelCss }
  ${ smallLabelCss }
`;
