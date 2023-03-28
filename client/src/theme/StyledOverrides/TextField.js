export default function TextField(theme) {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          "& fieldset": {
            color: theme.palette.common.black,
            borderColor: "grey !important",
          },
          
          "& .MuiFormLabel-root": {
            color: theme.palette.common.black,
            "&.Mui-focused": {
              color: "grey",
            },
          },
        },
      },
    },
  };
}
