export default function Paper() {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: 0.8,
          borderRadius: "10px",
        },
      },
    },
  };
}