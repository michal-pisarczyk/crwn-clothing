import { createStructuredSelector } from "reselect";
import { selectIsFetching } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import WithSpinner
  from "../with-spinner/with-spinner.component";
import CollectionsOverview
  from "./collections-overview.component";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
