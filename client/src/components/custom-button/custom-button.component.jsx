import React from "react";
import { StyledCustomButton } from "./custom-button.style";

const CustomButton = ({ children, ...props }) => (
  <StyledCustomButton { ...props }>
    { children }
  </StyledCustomButton>
);

export default CustomButton;
