import { Refresh } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React from "react";

export const RegenerateButton = ({ regeneratePassword }) => {
  const [regenerated, setRegenerated] = React.useState(false);

  const iconStyle = {
    color: regenerated ? "success.main" : "primary.main",
    transition: "all 0.5s ease",
    transform: regenerated ? "rotate(360deg)" : "rotate(0deg)",
  };

  const regenerate = () => {
    regeneratePassword();
    setRegenerated(true);
    setTimeout(() => {
      setRegenerated(false);
    }, 1000);
  };

  return (
    <Button
      sx={{
        my: 2,
      }}
      disabled={regenerated}
      variant="outlined"
      onClick={regenerate}
    >
      <Typography sx={{ mr: 1 }} variant="body2">
        Regenerate
      </Typography>
      <Refresh style={iconStyle} sx={{ ml: 1 }} />
    </Button>
  );
};
