import { Box, LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

export const StrengthMeter = ({ password }) => {
  const [strength, setStrength] = useState(0);

  const getStrengthColor = (strength) => {
    switch (strength) {
      case 0:
        return "error";
      case 1:
        return "error";
      case 2:
        return "warning";
      case 3:
        return "warning";
      case 4:
        return "success";
      case 5:
        return "success";
      case 6:
        return "success";
      default:
        return "error";
    }
  };

  useEffect(() => {
    const calculateStrength = () => {
      const length = password.length;
      const hasUppercase = /[A-Z]/.test(password);
      const hasLowercase = /[a-z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSymbol = /[!@#$%^&*]/.test(password);
      const has2of4 = hasUppercase + hasLowercase + hasNumber + hasSymbol >= 2;
      const bonusLength = length > 8 ? 1 : 0;
      const bonusUppercase = hasUppercase ? 1 : 0;
      const bonusLowercase = hasLowercase ? 1 : 0;
      const bonusNumber = hasNumber ? 1 : 0;
      const bonusSymbol = hasSymbol ? 1 : 0;
      const bonus2of4 = has2of4 ? 1 : 0;

      const strength =
        bonusLength +
        bonusUppercase +
        bonusLowercase +
        bonusNumber +
        bonusSymbol +
        bonus2of4;

      return strength;
    };
    const strength = calculateStrength();
    setStrength(strength);
  }, [password]);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ flexGrow: 1 }}>
        <LinearProgress
          variant="determinate"
          value={(strength / 6) * 100}
          sx={{
            height: 10,
            borderRadius: 5,
          }}
          color={getStrengthColor(strength)}
        />
      </Box>
    </Box>
  );
};
