import React from "react";
import { MenuContainer } from "./directory-menu.style";
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectoryMenuSections }
  from "../../redux/directory-menu/directory-menu.selectors";
import { connect } from "react-redux";

const DirectoryMenu = ({ sections }) => (
  <MenuContainer>
    {
      sections.map(({ id, ...otherSectionProps }) =>
        <MenuItem key={ id } { ...otherSectionProps } />
      )
    }
  </MenuContainer>
);

const mapStateToProps = state => ({
  sections: selectDirectoryMenuSections(state)
});

export default connect(mapStateToProps)(DirectoryMenu);
