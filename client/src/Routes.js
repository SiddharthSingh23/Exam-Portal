import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Teacher } from "./components/teacher/Teacher";
import { AllPapers } from "./components/teacher/all-papers/AllPapers";
import { AddPaper } from "./components/teacher/add-papers/AddPaper";
import { Results } from "./components/teacher/results/Results";
import { Student } from "./components/student/Student";
import { ViewValidPapers } from "./components/student/ViewValidPapers";
import { Exam } from "./components/student/Exam";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/teacher",
    element: <Teacher />,
    children: [
      {
        path: "",
        element: <Navigate to="allpapers" />,
      },
      {
        path: "allpapers",
        element: <AllPapers />,
      },
      {
        path: "addpaper",
        element: <AddPaper />,
      },
      {
        path: "results",
        element: <Results />,
      },
    ],
  },
  {
    path: "/student",
    element: <Student />,
    children: [
      {
        path: "",
        element: <ViewValidPapers />,
      },
      {
        path: "exam/:id",
        element: <Exam />
      }
    ],
  },
]);
