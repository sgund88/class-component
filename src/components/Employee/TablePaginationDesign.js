import {
  Button,
  ButtonGroup,
  Box,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
import * as React from "react";

export default function TablePaginationDesign(props) {
  const [recordPerPage, setRecordPerPage] = React.useState(20);

  //Show First page
  const showFirstPage = () => {
    let firstPage = 1;
    if (props.props.data.currentPage > firstPage) {
      props.dispatchFetchAllEmp(firstPage, recordPerPage);
    }
  };

  //Show previous page
  const showPrevPage = () => {
    let prevPage = 1;
    if (props.data.currentPage > prevPage) {
      props.dispatchFetchAllEmp(
        props.data.currentPage - prevPage,
        recordPerPage
      );
    }
  };

  //Show Next page
  const showNextPage = () => {
    if (props.data.currentPage < props.data.totalPages) {
      props.dispatchFetchAllEmp(props.data.currentPage + 1, recordPerPage);
    }
  };

  //Show Last Page
  const showLastPage = () => {
    if (props.data.currentPage < props.data.totalPages) {
      props.dispatchFetchAllEmp(props.data.totalPages, recordPerPage);
    }
  };

  React.useEffect(() => {
    props.dispatchFetchAllEmp(props.data.currentPage, recordPerPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recordPerPage]);

  return (
    <Box m={2}>
      <Grid container>
        <Grid item xs sx={{ textAlign: "left", padding: "10px" }}>
          <Typography variant="body2" gutterBottom>
            Total Element {props.data.totalElements}
          </Typography>
        </Grid>
        <TextField
          type="number"
          label="Rows Per Page"
          onChange={(e) => setRecordPerPage(e.target.value)}
          sx={{ width: "150px", maxHeight: "10px" }}
        />
        <Grid item xs sx={{ textAlign: "right", padding: "10px" }}>
          <Typography variant="body2" gutterBottom>
            Page {props.data.currentPage} of {props.data.totalPages}
          </Typography>
        </Grid>
        <Grid item xs sx={{ textAlign: "right" }}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              disabled={props.data.currentPage === 1 ? true : false}
              onClick={showFirstPage}
            >
              First
            </Button>
            <Button
              disabled={props.data.currentPage === 1 ? true : false}
              onClick={showPrevPage}
            >
              Previous
            </Button>
            <Button
              disabled={
                props.data.currentPage === props.data.totalPages ? true : false
              }
              onClick={showNextPage}
            >
              Next
            </Button>
            <Button
              disabled={
                props.data.currentPage === props.data.totalPages ? true : false
              }
              onClick={showLastPage}
            >
              Last
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Box>
  );
}
