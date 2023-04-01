/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { Question } from "./Question";
import { ViewPaper } from "./ViewPaper";
import axios from "axios";

export const PaperQuestions = ({ paperDetails, setValue }) => {
  const {BASE_URL} = process.env
  const [questions, setQuestions] = useState([]);
  const [questionList, setQuestionList] = useState([]);

  const quesHandler = (ques) => {
    setQuestions((prev) => [...prev, ques]);

    setQuestionList(
      questionList.concat(<ViewPaper key={questionList.length} data={ques} />)
    );
  };

  const submitHandler = async () => {
    try {
      const currentPaper = {
        details: paperDetails,
        questions,
      };

      const res = await axios.post(
        `${BASE_URL}/add-paper`,
        currentPaper
      );
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
    setValue(0);
  };

  return (
    <Box
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
        Exam Paper
      </Typography>

      <Question quesHandler={quesHandler} />

      {questionList}

      <Box align="end">
        <Button
          variant="contained"
          type="button"
          sx={{ ml: "20px" }}
          size="large"
          onClick={submitHandler}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};
