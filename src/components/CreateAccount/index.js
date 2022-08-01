import React, { Component } from "react";
import { connect } from "react-redux";
import { CreateUser } from "../../redux/thunk";
import CreateAccount from "./CreateAccount";

class NewAccount extends Component {
  render() {
    return (
      <CreateAccount
        isUserAuthenticated={this.props.isUserAuthenticated}
        createNewUser={this.props.createNewUser}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isUserAuthenticated: state.user.isUserAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewUser: (name, email, password) =>
      dispatch(CreateUser(name, email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewAccount);
