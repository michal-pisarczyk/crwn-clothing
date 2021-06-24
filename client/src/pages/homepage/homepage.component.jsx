import React from "react";
import DirectoryMenu
  from "../../components/directory-menu/directory-menu.component";
import { HomePageContainer } from "./homepage.style";

const HomePage = () => (
  <HomePageContainer>
    <DirectoryMenu />
  </HomePageContainer>
);

export default HomePage;
