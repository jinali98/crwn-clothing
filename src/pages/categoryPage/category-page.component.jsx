import React from "react";
import "./category-page.styles.scss";

const CategoryPage = ({ match }) => {
  console.log(match.params.categoryId);
  return <div className="category-page">this is caategory page</div>;
};

export default CategoryPage;
