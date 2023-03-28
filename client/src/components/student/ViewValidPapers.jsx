/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export const TakeTest = ({ id, startDate, startTime }) => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = moment().format("MMM Do YY");
      const currentTime = moment().format("h:mm a");

      console.log(currentTime);

      if (currentDate >= startDate && currentTime >= startTime) {
        setIsDisabled(false);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [startDate, startTime]);

  return (
    <Button
      size="small"
      sx={{ p: "5px 10px" }}
      variant="contained"
      onClick={(e) => navigate(`exam/${e.target.id}`)}
      id={id}
      disabled={isDisabled}
    >
      Take Test
    </Button>
  );
};

export const ViewValidPapers = () => {
  const [allPapers, setAllPapers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:5399/all-papers");
      setAllPapers(res.data);
    }
    fetchData();
  }, []);

  return (
    <TableContainer sx={{ minWidth: 650, p: "10px 20px" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow sx={{ "& .MuiTableCell-root": { fontWeight: 600 } }}>
            <TableCell>SUBJECT</TableCell>
            <TableCell align="right">CLASS</TableCell>
            <TableCell align="right">DATE</TableCell>
            <TableCell align="right">TIME</TableCell>
            <TableCell align="right">DURATION</TableCell>
            <TableCell align="right">ACTION</TableCell>
          </TableRow>
        </TableHead>

        <TableBody
          sx={{
            "& .MuiTableCell-root": {
              alignContent: "center",
              bgcolor: "rgba(237, 243, 247,0.8)",
            },
          }}
        >
          {allPapers.map((data, index) => {
            const paper = data.details;
            const startDateTime = paper.dateTime.toLocaleString();
            const startDate = moment(startDateTime).format("MMM Do YY");
            const startTime = moment(startDateTime).format("h:mm a");
            return (
              <TableRow key={index}>
                <TableCell>{paper.subject}</TableCell>
                <TableCell align="right">{paper.class}</TableCell>
                <TableCell align="right">{startDate}</TableCell>
                <TableCell align="right">{startTime}</TableCell>
                <TableCell align="right">{paper.duration} Hrs</TableCell>
                <TableCell align="right">
                  <TakeTest
                    id={index + 1}
                    startDate={startDate}
                    startTime={startTime}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
