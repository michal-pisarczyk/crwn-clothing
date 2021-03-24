import React from "react";
import "./directory-menu.style.scss";
import MenuItem from "../menu-item/menu-item.component";

class DirectoryMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          id: 4
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          id: 5
        }
      ]
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(section => (
            <MenuItem title={ section.title }
                      imageUrl={ section.imageUrl }
                      key={ section.id } />
          ));
        }
      </div>
    );
  }
}

export default DirectoryMenu;
