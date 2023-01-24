import { Input, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { Controls } from "./Controls";
import { CopyToClipboardButton } from "./CopyToClipboardButton";
import { RegenerateButton } from "./RegenerateButton";
import { StrengthMeter } from "./StrengthMeter";

export const Container = () => {
  const [password, setPassword] = React.useState("");
  const [params, setParams] = React.useState({
    length: 8,
    canContainUppercase: true,
    canContainNumbers: true,
    canContainSpecialCharacters: true,
  });

  const arrayFromLowToHigh = (low, high) => {
    const array = [];
    for (let i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  };

  const lowerCaseCharCodes = arrayFromLowToHigh(97, 122);
  const upperCaseCharCodes = arrayFromLowToHigh(65, 90);
  const numberCharCodes = arrayFromLowToHigh(48, 57);
  const symbolsCharCodes = arrayFromLowToHigh(33, 47)
    .concat(arrayFromLowToHigh(58, 64))
    .concat(arrayFromLowToHigh(91, 96))
    .concat(arrayFromLowToHigh(123, 126));

  const generatePassword = () => {
    const {
      length,
      canContainUppercase,
      canContainNumbers,
      canContainSpecialCharacters,
    } = params;
    let charCodes = lowerCaseCharCodes;
    if (canContainUppercase) charCodes = charCodes.concat(upperCaseCharCodes);
    if (canContainNumbers) charCodes = charCodes.concat(numberCharCodes);
    if (canContainSpecialCharacters)
      charCodes = charCodes.concat(symbolsCharCodes);

    const passwordCharacters = [];
    for (let i = 0; i < length; i++) {
      const characterCode =
        charCodes[Math.floor(Math.random() * charCodes.length)];
      passwordCharacters.push(String.fromCharCode(characterCode));
    }
    const password = passwordCharacters.join("");
    setPassword(password);
  };

  useEffect(() => {
    generatePassword();
    // eslint-disable-next-line
  }, [params]);

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 600,
        display: "flex",
        flexDirection: "column",
      }}
      component="main"
    >
      <Box sx={{ p: 2 }}>
        <Input value={password} />
        <CopyToClipboardButton text={password} />
      </Box>
      <StrengthMeter password={password} />
      <RegenerateButton regeneratePassword={generatePassword} />
      <Controls params={params} setParams={setParams} />
    </Paper>
  );
};
