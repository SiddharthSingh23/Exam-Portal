import React from "react";
import PropTypes from "prop-types";
import { Box, Checkbox, Divider, Grid, Typography } from "@mui/material";

export const ViewPaper = ({ data }) => {
  const question = JSON.parse(data.question);
  const option = JSON.parse(data.option);
  const answer = JSON.parse(data.answer);

  return (
    <Box>
      <Typography>{question}</Typography>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          ".MuiTypography-root": { p: "10px" },
        }}
      >
        {option.map((data, i) => (
          <Grid key={Math.random()} item xs={12} md={6}>
            <Box display="flex">
              {answer.includes(`${i+1}`) ? <Checkbox size="medium" disabled checked /> : <Checkbox size="medium" disabled />}
              <Typography>{data}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ m: "20px 40px" }} />
    </Box>
  );
};

ViewPaper.propTypes = {
    data: PropTypes.object,
}