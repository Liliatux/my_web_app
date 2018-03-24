import { connect } from "react-redux";
import MenuHeader from "../components/MenuHeader";

const mapStateToProps = state => ({
  active: state.activeItem
});

const menuContainer = connect(mapStateToProps)(MenuHeader);

export default menuContainer;
