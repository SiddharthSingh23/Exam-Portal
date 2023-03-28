import { Button, Checkbox, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Exam = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentStudent = JSON.parse(localStorage.getItem("currentUser"));
  const allPapers = JSON.parse(localStorage.getItem("Papers"));
  const currPaper = allPapers[id - 1];

  const exam = allPapers.filter((el) => el.details === currPaper.details);

  const { details, questions } = exam[0];

  const submitHandler = (e) => {
    e.preventDefault();

    let answersObj = {};
    let answersArr = [];

    for (let i = 0; i < e.target.length; i += 1) {
      if (e.target[i].checked) {
        if (!(e.target[i].name in answersObj)) {
          answersArr = [];
        }

        answersArr.push(e.target[i].value);

        answersObj = {
          ...answersObj,
          [e.target[i].name]: answersArr,
        };
      }
    }

    let marks = 0;

    for (let i = 0; i < questions.length; i += 1) {
      const correctAns = JSON.parse(questions[i].answer);
      const studentAns = answersObj[`c${i + 1}`];

      if (correctAns.length !== studentAns.length) {
        marks += 0;
      } else if (correctAns.filter((ele, i) => ele === studentAns[i]).length) {
        marks += 1;
      } else {
        marks += 0;
      }
    }

    let results = [];
    if (localStorage.getItem("Results")) {
      results = JSON.parse(localStorage.getItem("Results"));
    }

    const currentResult = {
      studentName: currentStudent.fullName,
      class: details.class,
      subject: details.subject,
      dateTime: details.dateTime,
      marks,  
    };

    results.push(currentResult);
    localStorage.setItem("Results", JSON.stringify(results));
    navigate("/student");
  };

  return (
    <Box component="form" onSubmit={submitHandler}>
      {questions.map((data, index) => {
        const { option } = data;
        return (
          <React.Fragment key={Math.random()}>
            <Box p={"20px"}>
              <Typography align="left" p={"10px"}>
                {JSON.parse(data.question)}
              </Typography>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{
                  ".MuiTypography-root": { p: "10px" },
                }}
              >
                {JSON.parse(option).map((opt, i) => (
                  <Grid key={i} item xs={12} md={6}>
                    <Box display="flex">
                      <Checkbox
                        size="medium"
                        value={i + 1}
                        name={`c${index + 1}`}
                      />
                      <Typography>{opt}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Divider sx={{ m: "20px 40px" }} />
          </React.Fragment>
        );
      })}
      <Button
        variant="contained"
        type="submit"
        sx={{ position: "fixed", bottom: 40, right: 50 }}
      >
        SUBMIT EXAM
      </Button>
    </Box>
  );
};
