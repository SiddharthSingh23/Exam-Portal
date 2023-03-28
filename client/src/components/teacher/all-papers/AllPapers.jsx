import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { Active } from "./Active";
import { Expired } from "./Expired";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`tab${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export const AllPapers = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box>
        <Tabs value={value} onChange={handleChange}>
          <Tab value={0} label="ACTIVE" />
          <Tab value={1} label="EXPIRED" />
        </Tabs>
      </Box>

      <Box>
        <TabPanel value={value} index={0}>
          <Active />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Expired />
        </TabPanel>
      </Box>
    </Box>
  );
};

TabPanel.propTypes = {
  children: PropTypes.any,
  value: PropTypes.any,
  index: PropTypes.any,
};
