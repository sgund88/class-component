import { Component } from "react";
import { connect } from "react-redux";
import { fetchAllEmployees } from "../../redux/thunk";
import TableDesign from "./TableDesign";
import TablePaginationDesign from "./TablePaginationDesign";

class Index extends Component {
  render() {
    return (
      <>
        <TableDesign data={this.props.data.employees} />
        <TablePaginationDesign
          data={this.props.data}
          dispatchFetchAllEmp={this.props.dispatchFetchAllEmp}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.allEmployees,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchAllEmp: (firstPage, recordPerPage) =>
      dispatch(fetchAllEmployees(firstPage, recordPerPage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
