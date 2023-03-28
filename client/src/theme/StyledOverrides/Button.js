export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "5px 20px",
          border: `1px solid ${theme.palette.common.blue}`,
          color: theme.palette.primary.dark,
          borderColor: `${theme.palette.primary.dark} !important`,
        },
        contained: {
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.common.white,
        },
      },
    },
  };
}
