import { settings } from "../settings";

export type Layers = "streetMap" | "googleMap" | "setelliteMap";

export interface CustomControlProps {
  setSelectedLayer: (newLayer: Layers) => void;
  SelectedLayer: Layers;
  setSettings: (newLayer: settings) => void;
  Settings: settings;
}
export interface MapLayerProps {
  setSelectedLayer: (newLayer: Layers) => void;
  SelectedLayer: Layers;
}
export interface LayerProps {
  SelectedLayer: Layers;
}
