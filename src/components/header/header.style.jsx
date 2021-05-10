import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../assets/crown.svg";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
`;

export const Logo = styled(LogoSvg)`
  width: 50px;
  height: 39px;
  transform: translate(10px, 15px);
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
