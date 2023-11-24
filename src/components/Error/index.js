import React from "react";
import error from "../../assets/error.png";
import { useTheme } from "@emotion/react";

export default function ErrorComponent() {
  const theme = useTheme();

  return (
    <div style={{ margin: theme.spacing(12) }}>
      <img src={error} alt="Error while getting movies data" />
      <p
        style={{
          color: theme.palette.primary.main,
          fontSize: theme.typography.fontSize.lg,
        }}
      >
        An error occurred while getting the movies, please try again
      </p>
      <p
        style={{
          color: theme.palette.gray.main,
          fontSize: theme.typography.fontSize.sm,
        }}
      >
        Check your network connection
      </p>
    </div>
  );
}
