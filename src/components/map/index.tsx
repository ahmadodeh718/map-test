import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import CustomControl from "./customControl";
import { Layers } from "../../models/layers";
import Layer from "./layer";
import CustomMarker from "./customMarker";
import MarkerClusterGroup from "react-leaflet-cluster";
import { settings } from "../../models/settings";

const Map = () => {
  const [SelectedLayer, setSelectedLayer] = useState<Layers>("streetMap");
  const [Settings, setSettings] = useState<settings>({
    ping: true,
    group: true,
  });
  const Locations = [
    {
      color: "#2e7d32",
      rotate: 85,
      points: [59.3209943914437, 18.06826098962576],
    },
    {
      color: "#2e7d32",
      rotate: 80,
      points: [59.32101829089638, 18.048066619439275],
    },
    {
      color: "#d32f2f",
      rotate: 70,
      points: [59.31604985527006, 18.06835242138362],
    },
    {
      color: "#0F0F0F",
      rotate: 168,
      points: [59.32297524202686, 18.067123714145126],
    },
    {
      color: "#ed6c02",
      rotate: 282,
      points: [59.31755294014327, 18.087945666646597],
    },
  ];

  return (
    <div
      style={{
        overflow: "hidden",
        margin: "2.5rem",
        borderRadius: "1rem",
        boxShadow:
          "0 0 #0000,0 0 #0000,0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1)",
      }}
    >
      <MapContainer
        style={{ width: "100%", height: 500 }}
        center={[59.32117438390421, 18.06802027064832]}
        zoom={14}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <Layer SelectedLayer={SelectedLayer} />
        {Settings.group ? (
          <MarkerClusterGroup chunkedLoading>
            {Locations.map((location, index) => (
              <CustomMarker
                key={index}
                color={location.color}
                rotate={location.rotate}
                points={location.points}
                ping={Settings.ping}
              />
            ))}
          </MarkerClusterGroup>
        ) : (
          <>
            {Locations.map((location, index) => (
              <CustomMarker
                key={index}
                color={location.color}
                rotate={location.rotate}
                points={location.points}
                ping={Settings.ping}
              />
            ))}
          </>
        )}

        <CustomControl
          SelectedLayer={SelectedLayer}
          setSelectedLayer={(newLayer: Layers) => setSelectedLayer(newLayer)}
          setSettings={(newSettings: settings) => setSettings(newSettings)}
          Settings={Settings}
        />
      </MapContainer>
    </div>
  );
};

export default Map;
