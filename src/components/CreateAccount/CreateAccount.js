import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = () => {
    if (this.state.email !== "" && this.state.password !== "") {
      this.props.createNewUser(
        this.state.name,
        this.state.email,
        this.state.password
      );
    }
  };

  render() {
    return (
      <Box
        sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}
      >
        {!this.props.isUserAuthenticated ? (
          <Box sx={{ width: 400, margin: 5 }}>
            <TextField
              margin="dense"
              id="name"
              label="Your Name"
              type="text"
              fullWidth
              variant="outlined"
              value={this.state.name}
              onChange={(e) =>
                this.setState({
                  name: e.target.value,
                })
              }
            />
            <TextField
              required
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
              value={this.state.email}
              onChange={(e) =>
                this.setState({
                  email: e.target.value,
                })
              }
            />
            <TextField
              name="password"
              type="password"
              placeholder="password"
              label="Password"
              margin="dense"
              id="password"
              fullWidth
              variant="outlined"
              value={this.state.password}
              onChange={(e) =>
                this.setState({
                  password: e.target.value,
                })
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
            <Link to="/Home" variant="body2">
              {"If you already have an account, just login."}
            </Link>
          </Box>
        ) : (
          <Navigate to="/Home" />
        )}
      </Box>
    );
  }
}

export default CreateAccount;
