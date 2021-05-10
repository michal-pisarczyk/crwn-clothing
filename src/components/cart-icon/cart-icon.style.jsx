import styled from "styled-components";
import { ReactComponent as CartImageSvg }
  from "../../assets/shopping-bag.svg"

export const CartImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 45px;
  height: 45px;
  align-items: center;
  cursor: pointer;
`;

export const CartImage = styled(CartImageSvg)`
  width: 24px;
  height: 24px;
`;

export const ItemCountInfo = styled.span`
  position: absolute;
  bottom: 12px;
  font-size: 10px;
  font-weight: bold;
`;
