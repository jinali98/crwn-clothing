import { Component } from "react";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";
import SHOP_DATA from "./shop.data";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    console.log(this.state.collections);
    return (
      <div>
        {collections.map(({ id, ...otherParams }) => (
          <PreviewCollection key={id} {...otherParams} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
