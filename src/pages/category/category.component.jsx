import React from "react";
import "./category.style.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CategoryPage = ({ match }) => {
  console.log(match.params.categoryId);

  return (
    <div className="category-page">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};

export default CategoryPage;
