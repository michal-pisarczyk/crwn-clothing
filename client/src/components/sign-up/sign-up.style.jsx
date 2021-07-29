import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  @media screen and (max-width: 800px) {
    display: inline-block;
    width: 100%;
    margin-top: 80px;
  }
`;

export const Title = styled.h2`
  margin: 10px 0;
`;
