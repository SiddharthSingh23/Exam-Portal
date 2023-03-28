/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { PaperDetails } from "./PaperDetails";
import { PaperQuestions } from "./PaperQuestions";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`tab${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export const AddPaper = () => {
  const [value, setValue] = useState(0);
  const [paperDetails, setPaperDetails] = useState({});

  return (
    <>
      <Box>
        <Tabs value={value}>
          <Tab label="DETAILS" value={0} />
          <Tab label="PAPER" value={1} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PaperDetails setPaperDetails={setPaperDetails} setValue={setValue} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PaperQuestions paperDetails={paperDetails} setValue={setValue} />
      </TabPanel>
    </>
  );
};
