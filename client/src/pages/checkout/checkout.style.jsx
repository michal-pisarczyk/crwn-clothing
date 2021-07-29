import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-width: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 800px) {
    min-width: 60vh;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgray;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const TestWarning = styled.div`
  display: grid;
  grid-template-columns: .8fr 1fr;
  grid-gap: 10px;
  width: 60%;
  min-width: 360px;
  margin: 40px 0;
  font-size: 24px;
  color: red;
  text-align: left;

  span:first-child {
    grid-column: 1 / span 2;
    font-size: 18px;
    text-align: center;
  }

  span:nth-child(2n+2) {
    color: gray;
    text-align: right;
  }
`;
