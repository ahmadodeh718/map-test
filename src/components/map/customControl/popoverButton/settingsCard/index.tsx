import React from "react";
import {
  FormGroup,
  FormControlLabel,
  Switch,
  Box,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SettingsProps } from "../../../../../models/settings";
import { useMap } from "react-leaflet";

const SettingsCard = ({ Settings, setSettings }: SettingsProps) => {
  const theme = createTheme({
    components: {
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            color: "#fff",
          },
          colorPrimary: {
            "&.Mui-checked": {
              color: "rgb(66, 70, 73)",
            },
          },
          track: {
            opacity: 1,
            backgroundColor: "#9C9FA0",
            ".Mui-checked.Mui-checked + &": {
              opacity: 1,
              backgroundColor: "#9C9FA0",
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box style={{ padding: " 5px 15px" }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                onChange={(e) => {
                  setSettings({ ...Settings, group: e.target.checked });
                
                }}
                checked={Settings.group}
              />
            }
            label={
              <Typography style={{ fontSize: 13 }}>Markers Grouping</Typography>
            }
          />
          <FormControlLabel
            control={
              <Switch
                onChange={(e) =>
                  setSettings({ ...Settings, ping: e.target.checked })
                }
                checked={Settings.ping}
              />
            }
            label={
              <Typography style={{ fontSize: 13 }}>
                Markers Ping Angle
              </Typography>
            }
          />
        </FormGroup>
      </Box>
    </ThemeProvider>
  );
};

export default SettingsCard;
