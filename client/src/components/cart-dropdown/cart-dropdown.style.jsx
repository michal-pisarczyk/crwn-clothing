import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
  z-index: 2;
  position: absolute;
  top: 80px;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 240px;
  height: 340px;
  background-color: white;
  border: 1px solid black;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 240px;
  overflow: auto;
`;

export const GoToCheckoutButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyCartMessage = styled.span`
  margin: 50px auto;
  font-size: 18px;
`;
