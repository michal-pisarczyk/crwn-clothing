import React from "react";
import "./homepage.style.scss";
import DirectoryMenu from "../../components/directory-menu/directory-menu.component";

const HomePage = ({ history }) => (
  <div className="homepage">
    <DirectoryMenu history={ history } />
  </div>
);

export default HomePage;
