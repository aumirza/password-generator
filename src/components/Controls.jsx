import { Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { LabelledCheckBox } from "./LabelledCheckBox";

export const Controls = ({ params, setParams }) => {
  const [canContainSpecialCharacters, setCanContainSpecialCharacters] =
    useState(params.canContainSpecialCharacters);
  const [canContainNumbers, setCanContainNumbers] = useState(
    params.canContainNumbers
  );
  const [canContainUppercase, setCanContainUppercase] = useState(
    params.canContainUppercase
  );

  const [length, setLength] = useState(params.length);

  useEffect(() => {
    setParams({
      length,
      canContainSpecialCharacters,
      canContainNumbers,
      canContainUppercase,
    });
  }, [
    length,
    canContainSpecialCharacters,
    canContainNumbers,
    canContainUppercase,
    setParams,
  ]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="body1">Password Length: {length}</Typography>
      <Slider
        value={length}
        onChange={(e, value) => setLength(value)}
        min={6}
        max={16}
      />

      <Typography variant="body1">Password Options</Typography>

      <LabelledCheckBox
        label="Uppercase?"
        checked={canContainUppercase}
        onCheck={(e) => setCanContainUppercase(e.target.checked)}
      />
      <LabelledCheckBox
        label="Numbers?"
        checked={canContainNumbers}
        onCheck={(e) => setCanContainNumbers(e.target.checked)}
      />
      <LabelledCheckBox
        label="Special characters?"
        checked={canContainSpecialCharacters}
        onCheck={(e) => setCanContainSpecialCharacters(e.target.checked)}
      />
    </Box>
  );
};
