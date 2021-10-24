import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSection } from "../../redux/directory/directory.selector";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

const Directory = ({ directory }) => {
  return (
    <div className="directory-menu">
      {directory.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  directory: selectSection,
});

export default connect(mapStateToProps)(Directory);
