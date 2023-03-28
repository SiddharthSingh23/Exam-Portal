import { RouterProvider } from "react-router-dom";
import { createTheme } from "@mui/material";
import ThemeProvider from "./theme";
import { router } from "./Routes";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: ['"Poppins"', "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
