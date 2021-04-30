import React from "react";
import "./directory-menu.style.scss";
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectoryMenuSections } from "../../redux/directory-menu/directory-menu.selectors";

class DirectoryMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          linkUrl: "hats",
          id: 1
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          linkUrl: "",
          id: 2
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          linkUrl: "",
          id: 3
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          linkUrl: "",
          size: "large",
          id: 4
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          linkUrl: "",
          size: "large",
          id: 5
        }
      ]
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={ id } { ...otherSectionProps } />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sections: selectDirectoryMenuSections(state)
});

export default DirectoryMenu;
