import axios from "axios";
import React, { useEffect, useState } from "react";
import { ViewAllPapers } from "./ViewAllPapers";

export const Active = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL
  const [allPapers, setAllPapers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${BASE_URL}/all-papers`);
      setAllPapers(res.data);
    }
    fetchData();
  }, [BASE_URL]);

  return <ViewAllPapers allPapers={allPapers} />;
};
