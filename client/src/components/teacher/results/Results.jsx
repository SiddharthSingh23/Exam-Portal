import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import Moment from "moment";

export const Results = () => {
  let results;

  if (localStorage.getItem("Results")) {
    results = JSON.parse(localStorage.getItem("Results"));
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow sx={{ "& .MuiTableCell-root": { fontWeight: 600 } }}>
            <TableCell>NAME</TableCell>
            <TableCell align="right">CLASS</TableCell>
            <TableCell align="right">SUBJECT</TableCell>
            <TableCell align="right">DATE</TableCell>
            <TableCell align="right">MARKS</TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ "& .MuiTableCell-root": { alignContent: "center" } }}>
          {results.map((data, index) => {
            const date = data.dateTime.toLocaleString();
            return (
              <TableRow key={index}>
                <TableCell>{data.studentName}</TableCell>
                <TableCell align="right">{data.class}</TableCell>
                <TableCell align="right">{data.subject}</TableCell>
                <TableCell align="right">{Moment(date).format("MMM Do YY")}</TableCell>
                <TableCell align="right">{data.marks}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
