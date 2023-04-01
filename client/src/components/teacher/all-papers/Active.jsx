import axios from "axios";
import React, { useEffect, useState } from "react";
import { ViewAllPapers } from "./ViewAllPapers";

export const Active = () => {
  const {BASE_URL} = process.env
  const [allPapers, setAllPapers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${BASE_URL}/all-papers`);
      setAllPapers(res.data);
    }
    fetchData();
  }, []);

  return <ViewAllPapers allPapers={allPapers} />;
};
