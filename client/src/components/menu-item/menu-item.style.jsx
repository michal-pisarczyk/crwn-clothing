import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url(${ props => props.url });
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  height: 90px;
  background-color: white;
  border: 1px solid black;
  opacity: .7;
`;

export const MenuItemContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;
  min-width: 30%;
  height: ${ props => props.size === "large" ? "380px" : "240px" };
  
  border: 1px solid black;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    & ${ BackgroundImage } {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(.25, .45, .45, .95);
    }

    & ${ Content } {
      opacity: .9;
    }
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 6px;
  font-weight: bold;
  font-size: 22px;
  color: #4a4a4a;
`;

export const SubTitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
