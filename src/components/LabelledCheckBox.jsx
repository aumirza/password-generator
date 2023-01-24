import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

export const LabelledCheckBox = ({ label, checked, onCheck, disabled }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onCheck}
          disabled={disabled}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
      label={label}
    />
  );
};
