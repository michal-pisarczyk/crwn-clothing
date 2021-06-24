import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  padding: 15px 0;
  width: 100%;
  min-height: 100px;
  font-size: 20px;
  align-items: center;
  border-bottom: 1px solid darkgray;
`;

export const ImageContainer = styled.div`
  padding-right: 15px;
  width: 23%;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ItemName = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled.div`
  display: flex;
  width: 23%;
`;

export const Arrow = styled.span`
  cursor: pointer;
`;

export const ItemQuantity = styled.span`
  margin: 0 10px;
`;

export const ItemPrice = ItemName;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
