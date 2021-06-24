import React from "react";
import { BackgroundImage,
         Content,
         MenuItemContainer,
         Title,
         SubTitle } from "./menu-item.style";
import { withRouter } from "react-router-dom";

const MenuItem = props => {
  const { title, imageUrl, linkUrl, size, history, match } = props;

  return (
    <MenuItemContainer
      size={ size }
      onClick={ () => history.push(`${ match.url }${ linkUrl }`) }>
      <BackgroundImage url={ imageUrl } />
      <Content>
        <Title>{ title.toUpperCase() }</Title>
        <SubTitle>SHOP NOW</SubTitle>
      </Content>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
