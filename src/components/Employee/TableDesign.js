import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TableDesign(props) {
  return (
    <div>
      <TableContainer component={Paper} sx={{ maxHeight: 420, minHeight: 450 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Contact Number</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Salary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell component="th" scope="row">
                  {row.fullName}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.contactNumber}</TableCell>
                <TableCell>{row.dob}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.salary}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
