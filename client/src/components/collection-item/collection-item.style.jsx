import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemImage = styled.div`
  margin-bottom: 5px;
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  background-image: ${ props => `url(${ props.url })` };
`;

export const CollectionItemButton = styled(CustomButton)`
  position: absolute;
  top: 255px;
  display: none;
  width: 80%;
  opacity: .7;
`;

export const CollectionItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5%;
  font-size: 18px;
`;

export const CollectionItemName = styled.span`
  margin-bottom: 15px;
  width: 90%;
`;

export const CollectionItemPrice = styled.span`
  width: 10%;
  text-align: right;
`;

export const CollectionItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 22vw;
  height: 350px;
  align-items: center;

  &:hover {
    ${CollectionItemImage} {
      opacity: .8;
    }

    ${CollectionItemButton} {
      display: flex;
      opacity: .85;
    }
  }
`;
