import React from "react";
import { LayerProps, Layers } from "../../../models/layers";
import { TileLayer } from "react-leaflet";

const Layer = ({ SelectedLayer }: LayerProps) => {
  return (
    <>
      {SelectedLayer === "streetMap" && (
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      )}
      {SelectedLayer === "googleMap" && (
        <TileLayer
          url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          subdomains={["mt1", "mt2", "mt3"]}
        />
      )}

      {SelectedLayer === "setelliteMap" && (
        <TileLayer
          url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          subdomains={["mt1", "mt2", "mt3"]}
        />
      )}
    </>
  );
};

export default Layer;
