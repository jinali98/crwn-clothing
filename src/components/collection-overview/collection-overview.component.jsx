import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPerview } from "../../redux/shop/shop.selector";
import PreviewCollection from "../preview-collection/preview-collection.component";

import "./collection-overview.styles.scss";
const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherParams }) => (
        <PreviewCollection key={id} {...otherParams} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPerview,
});
export default connect(mapStateToProps)(CollectionOverview);
