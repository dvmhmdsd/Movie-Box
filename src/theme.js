export const customTheme = {
  typography: {
    fontSize: {
      xs: "12px",
      sm: "px",
      md: "18px",
      lg: "24px",
      xl: "36px",
    },
  },
  palette: {
    primary: { main: "#111827" },
    secondary: { main: "#BE123C" },
    gray: {
      main: "#9CA3AF",
      bg: "#F3F4F6",
      light: "#D1D5DB",
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`,
};
