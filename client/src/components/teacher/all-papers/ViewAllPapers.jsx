/* eslint-disable react/prop-types */
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export const ViewAllPapers = ({ allPapers }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow sx={{ "& .MuiTableCell-root": { fontWeight: 600 } }}>
            <TableCell>SUBJECT</TableCell>
            <TableCell align="right">CLASS</TableCell>
            <TableCell align="right">START FROM</TableCell>
            <TableCell align="right">DURATION</TableCell>
          </TableRow>
        </TableHead>

        <TableBody sx={{ "& .MuiTableCell-root": { alignContent: "center" } }}>
          {allPapers.map((data, index) => {
            const paper = data.details
            const start = paper.dateTime.toLocaleString()
            return (
              <TableRow key={index}>
                <TableCell>{paper.subject}</TableCell>
                <TableCell align="right">{paper.class}</TableCell>
                <TableCell align="right">{start}</TableCell>
                <TableCell align="right">{paper.duration} Hrs</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
