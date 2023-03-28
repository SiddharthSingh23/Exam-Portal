/* eslint-disable react/prop-types */
import React from "react";
import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export const PaperDetails = ({ setPaperDetails, setValue }) => {
  const [dateTime, setDateTime] = React.useState(
    dayjs().add(1, "h").startOf("hour")
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    data.append("dateTime", dateTime);
    const value = Object.fromEntries(data.entries());

    setPaperDetails(value);
    setValue(1);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      align="start"
      sx={{
        maxWidth: "800px",
        border: "none",
        p: "20px",
        borderRadius: "10px",
        background: "rgba(237, 243, 247,0.8)",
        opacity: 1,
        mb: "20px",
      }}
    >
      <Typography pb={2} fontSize={20}>
        Exam Details
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={6}>
          <TextField label="Subject" type="text" name="subject" />
        </Grid>

        <Grid item container xs={12} md={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Exam Date & Time"
              name="dateTime"
              value={dateTime}
              onChange={(newDateTime) => setDateTime(newDateTime)}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField label="Class" type="number" name="class" />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField label="Duration (Hours)" type="number" name="duration" />
        </Grid>
      </Grid>

      <Box align="end">
        <Button
          variant="contained"
          type="submit"
          size="large"
          sx={{ my: "20px" }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
