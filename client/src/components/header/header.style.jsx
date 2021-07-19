import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../assets/crown.svg";

const logoWidthDesktop = 70;
const logoWidthMobile = 50;
const logoViewBoxRatio = 39/50;
// svg.viewBox.height / svg.viewBox.width

export const HeaderContainer = styled.div`
  width: 100%;
  height: ${`${ logoWidthDesktop * logoViewBoxRatio }px`};
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: ${`${ logoWidthMobile * logoViewBoxRatio }px`};
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  width: ${`${ logoWidthDesktop }px`};
  height: ${`${ logoWidthDesktop * logoViewBoxRatio }px`};

  @media screen and (max-width: 800px) {
    width: ${`${ logoWidthMobile }px`};
    height: ${`${ logoWidthMobile * logoViewBoxRatio }px`};
  }
`;

export const Logo = styled(LogoSvg)``;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

const OptionStyle = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const OptionLink = styled(Link)`
  ${ OptionStyle }
`;

export const OptionDiv = styled.div`
  ${ OptionStyle }
`;
