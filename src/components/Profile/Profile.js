import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "../../redux/thunk";

export default function Profile(props) {
  const data = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);
  const [values, setvalues] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleClose = () => {
    setOpen(false);
    props.openDialogProfile();
    props.handleMenu(true);
  };

  const handleUpdate = () => {
    if (values.email !== "" && values.password !== "") {
      dispatch(
        updateUserInfo(data.id, values.name, values.email, values.password)
      );
      props.openDialogProfile();
      props.handleMenu(true);
    }
  };

  React.useEffect(() => {
    setvalues({ name: data.name, email: data.email, password: data.password });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>Your Profile Details</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="Your Name"
            type="text"
            fullWidth
            variant="outlined"
            value={values.name}
            onChange={(e) =>
              setvalues({
                name: e.target.value,
                email: values.email,
                password: values.password,
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
            value={values.email}
            onChange={(e) =>
              setvalues({
                name: values.name,
                email: e.target.value,
                password: values.password,
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
            value={values.password}
            onChange={(e) =>
              setvalues({
                name: values.name,
                email: values.email,
                password: e.target.value,
              })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
