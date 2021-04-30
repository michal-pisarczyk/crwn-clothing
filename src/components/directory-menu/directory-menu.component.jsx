import React from "react";
import "./directory-menu.style.scss";
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectoryMenuSections } from "../../redux/directory-menu/directory-menu.selectors";
import { connect } from "react-redux";

const DirectoryMenu = ({ sections }) => (
  <div className="directory-menu">
    {
      sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={ id } { ...otherSectionProps } />
      ))
    }
  </div>
);

const mapStateToProps = state => ({
  sections: selectDirectoryMenuSections(state)
});

export default connect(mapStateToProps)(DirectoryMenu);
