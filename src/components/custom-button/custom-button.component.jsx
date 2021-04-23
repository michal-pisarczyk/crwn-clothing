import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ children,
                        isGoogleSignIn,
                        isInverted, ...otherProps }) => {

  let googleSignIn = isGoogleSignIn ? "google-sign-in" : "";
  let inverted = isInverted ? "inverted" : "";

  return (
    <button
      className={ `custom-button ${ googleSignIn } ${ inverted }` }
      { ...otherProps }>
      { children }
    </button>
  )
}

export default CustomButton;
