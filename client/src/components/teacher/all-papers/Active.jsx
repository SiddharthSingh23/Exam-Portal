import axios from "axios";
import React, { useEffect, useState } from "react";
import { ViewAllPapers } from "./ViewAllPapers";

export const Active = () => {
  const [allPapers, setAllPapers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:5399/all-papers");
      setAllPapers(res.data);
    }
    fetchData();
  }, []);

  return <ViewAllPapers allPapers={allPapers} />;
};
