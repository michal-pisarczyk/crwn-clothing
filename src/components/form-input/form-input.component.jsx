import React from "react";
import { InputContainer,
         InputField,
         FullSizeLabel,
         MinifiedLabel } from "./form-input.style";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <InputContainer>
    <InputField onChange={ handleChange } { ...otherProps } />
    {
      label ?
      (
        otherProps.value.length ?
        <MinifiedLabel>{ label }</MinifiedLabel> :
        <FullSizeLabel>{ label }</FullSizeLabel>
      ) : null
    }
  </InputContainer>
);

export default FormInput;
