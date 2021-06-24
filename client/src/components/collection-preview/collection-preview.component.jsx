import React from "react";
import { PreviewContainer,
         Title,
         Preview } from "./collection-preview.style";
import CollectionItem
  from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <PreviewContainer>
    <Title>{ title.toUpperCase() }</Title>
    <Preview>
      {
        items
          .filter((_item, index) => index < 4)
          .map(item => (
            <CollectionItem key={ item.id } item={ item } />
        ))
      }
    </Preview>
  </PreviewContainer>
);

export default CollectionPreview;
