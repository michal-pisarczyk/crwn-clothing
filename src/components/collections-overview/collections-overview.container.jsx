import { createStructuredSelector } from "reselect";
import { selectIsFetching } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import WithSpinner
  from "../components/with-spinner/with-spinner.component";
import CollectionsOverview
  from "./collections-overview/collections-overview.component";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching
});

const CollectionsOverviewConainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewConainer;
