import React from "react";

import { Box, Divider, Avatar, Typography } from "@mui/material";
import { CustomControlProps, MapLayerProps } from "../../../../../models/layers";

const MapsSelectorCard = ({
  setSelectedLayer,
  SelectedLayer,
}: MapLayerProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "fit-content",
        border: (theme: any) => `1px solid ${theme.palette.divider}`,
        borderRadius: 1,
        bgcolor: "background.paper",
        color: "text.secondary",
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: " 8px 15px",
        }}
      >
        <Box
          onClick={() => setSelectedLayer("streetMap")}
          style={{
            cursor: "pointer",
            borderRadius: 400,
            padding: 1.6,
            border:
              SelectedLayer === "streetMap"
                ? "3px solid rgb(76, 175, 80)"
                : "3px solid rgb(238, 238, 238)",
          }}
        >
          <Avatar alt="Open Street Map" src="/images/osm.png" />
        </Box>
        <Typography
          style={{
            margin: "5px 0 0",
            fontSize: 13,
            maxWidth: 60,
            lineHeight: 1.3,
            textAlign: "center",
            color: "#000",
          }}
          variant="h6"
          component="h6"
        >
          Open Street Map
        </Typography>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: " 8px 15px",
        }}
      >
        <Box
          onClick={() => setSelectedLayer("googleMap")}
          style={{
            cursor: "pointer",
            borderRadius: 400,
            padding: 1.6,
            border:
              SelectedLayer === "googleMap"
                ? "3px solid rgb(76, 175, 80)"
                : "3px solid rgb(238, 238, 238)",
          }}
        >
          <Avatar alt="Open Street Map" src="/images/google.png" />
        </Box>
        <Typography
          style={{
            margin: "5px 0 0",
            fontSize: 13,
            maxWidth: 60,
            lineHeight: 1.3,
            textAlign: "center",
            color: "#000",
          }}
          variant="h6"
          component="h6"
        >
          Google Map
        </Typography>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: " 8px 15px",
        }}
      >
        <Box
          onClick={() => setSelectedLayer("setelliteMap")}
          style={{
            cursor: "pointer",
            borderRadius: 400,
            padding: 1.6,
            border:
              SelectedLayer === "setelliteMap"
                ? "3px solid rgb(76, 175, 80)"
                : "3px solid rgb(238, 238, 238)",
          }}
        >
          <Avatar alt="Open Street Map" src="/images/googleSatellite.png" />
        </Box>
        <Typography
          style={{
            margin: "5px 0 0",
            fontSize: 13,
            maxWidth: 60,
            lineHeight: 1.3,
            textAlign: "center",
            color: "#000",
          }}
          variant="h6"
          component="h6"
        >
          Google Map Satellite
        </Typography>
      </Box>
    </Box>
  );
};

export default MapsSelectorCard;
