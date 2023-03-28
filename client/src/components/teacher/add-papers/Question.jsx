import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, TextField, Checkbox, Divider, Grid, Button } from "@mui/material";

export const Question = ({ quesHandler }) => {
  const [checked, setChecked] = useState({
    c1: false,
    c2: false,
    c3: false,
    c4: false,
  });

  const handleChange = (e) => {
    setChecked((prev) => ({
      ...prev,
      [e.target.name]: !checked[e.target.name],
    }));
  };

  const saveQuestion = (e) => {
    e.preventDefault();

    const ques = e.target.ques.value;
    const option = [];
    const answer = [];

    for (let i = 1; i < 5; i += 1) {
      const optionName = `t${i}`;
      option.push(e.target[optionName].value);

      const answerName = `c${i}`;
      if (e.target[answerName].checked) answer.push(e.target[answerName].value);
    }

    const data = new FormData();
    data.append("question", JSON.stringify(ques));
    data.append("option", JSON.stringify(option));
    data.append("answer", JSON.stringify(answer));

    const value = Object.fromEntries(data.entries());

    // adding questions and showing it
    quesHandler(value)

    document.getElementById("question").reset();
    setChecked({
      c1: false,
      c2: false,
      c3: false,
      c4: false,
    });
  };

  return (
    <Box component="form" onSubmit={saveQuestion} id="question">
      <TextField label="Question" type="text" sx={{ mb: "20px" }} name="ques" />

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          ".MuiTextField-root": { ".MuiInputBase-input  ": { p: "10px" } },
        }}
      >
        <Grid item xs={12} md={6}>
          <Box display="flex">
            <Checkbox
              size="medium"
              name="c1"
              value={1}
              checked={checked.c1}
              onChange={handleChange}
            />
            <TextField type="text" name="t1" />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex">
            <Checkbox
              size="medium"
              name="c2"
              value={2}
              checked={checked.c2}
              onChange={handleChange}
            />
            <TextField type="text" name="t2" />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex">
            <Checkbox
              size="medium"
              name="c3"
              value={3}
              checked={checked.c3}
              onChange={handleChange}
            />
            <TextField type="text" name="t3" />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box display="flex">
            <Checkbox
              size="medium"
              name="c4"
              value={4}
              checked={checked.c4}
              onChange={handleChange}
            />
            <TextField type="text" name="t4" />
          </Box>
        </Grid>
      </Grid>

      <Box align="end" sx={{ mt: "20px" }}>
        <Button variant="outlined" type="submit">
          Add Question
        </Button>
      </Box>

      <Divider sx={{ m: "40px" }} />
    </Box>
  );
};

Question.propTypes = {
  quesHandler: PropTypes.func,
};
