import { createStructuredSelector } from "reselect";
import { selectIsLoaded } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import WithSpinner
  from "../../components/with-spinner/with-spinner.component";
import CollectionPage
  from "./collection.component";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsLoaded(state)
});

const CollectionPageConainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageConainer;
