import React, { useEffect, useState } from "react";
import { ButtonGroup, Button, Tooltip } from "@mui/material";
import {
  Fullscreen,
  Layers,
  Settings as SettingsIcon,
  ZoomIn,
  ZoomOut,
} from "@mui/icons-material";
import Control from "react-leaflet-custom-control";
import PopoverButton from "./popoverButton";
import { useMap, useMapEvents } from "react-leaflet";
import { FullscreenControl } from "react-leaflet-fullscreen";
import MapsSelectorCard from "./popoverButton/mapsSelectorCard";
import { CustomControlProps } from "../../../models/layers";
import SettingsCard from "./popoverButton/settingsCard";
import { settings } from "../../../models/settings";

const CustomControl = ({
  setSelectedLayer,
  SelectedLayer,
  setSettings,
  Settings
}: CustomControlProps) => {
  const map = useMap();
  const [zoom, setZoom] = useState<number>(14);
  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoom(mapEvents.getZoom());
    },
  });
  useEffect(() => {
    map.setZoom(zoom);
  }, [zoom]);
  return (
    <Control position="bottomleft">
      <ButtonGroup orientation="horizontal" variant="outlined">
        <Tooltip placement="bottom" title="Zoom In">
          <Button onClick={() => setZoom(zoom + 1)} color="inherit">
            <ZoomIn />
          </Button>
        </Tooltip>
        <Tooltip placement="bottom" title="Zoom Out">
          <Button onClick={() => setZoom(zoom - 1)} color="inherit">
            <ZoomOut />
          </Button>
        </Tooltip>
      </ButtonGroup>
      <PopoverButton
        title={"Change Map"}
        icon={<Layers />}
        content={
          <MapsSelectorCard
            SelectedLayer={SelectedLayer}
            setSelectedLayer={(newLayer) => setSelectedLayer(newLayer)}
          />
        }
      />
      <PopoverButton
        title={"Settings"}
        icon={<SettingsIcon />}
        content={<SettingsCard Settings={Settings} setSettings={(newSettings:settings)=>setSettings(newSettings)}/>}
      />
      <Tooltip placement="bottom" title="Full Screen">
        <Button
          onClick={() => {
            let fullScreenButton: HTMLElement = document.querySelector(
              ".leaflet-control-zoom-fullscreen"
            ) as HTMLElement;
            if (fullScreenButton !== null) fullScreenButton.click();
          }}
          color="inherit"
          variant="outlined"
        >
          <Fullscreen />
        </Button>
      </Tooltip>
      <FullscreenControl />
    </Control>
  );
};

export default CustomControl;
