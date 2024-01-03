import React from "react";
import { Marker } from "react-leaflet";
import { divIcon } from "leaflet";

interface CustomMarkerProps {
  color: string;
  rotate: number;
  points: any;
  ping: boolean;
}

const CustomMarker = ({ color, rotate, points, ping }: CustomMarkerProps) => {
  var div = `
    <div style="width:30px;height:30px;    position: relative;" class="flex justify-center items-center">
      <div class=" flex justify-center items-center" style="width:30px;height:30px;background-color:${color}d0;border-radius: 50%;">
        <div style="width:100%;height:100%;border-radius:50%;">
          <div style="width:100%;height:100%;background-image:url(&quot;/images/genericCarMarker.png&quot;);background-size:contain;background-position:center;background-repeat:no-repeat;object-fit:contain;transform:rotate(${rotate}deg)">
          </div>
        </div>
      </div>
      <div style="transform:rotate(${
        rotate + 34
      }deg);width:100%;height:100%;  border-radius:50%;  position: absolute;
        display: flex;
        align-items: center;
        justify-content: end;
        opacity: 0.75;
        top: 0;" >${
          ping
            ? ` <svg style="transform:translate(1px,-7px)" width="10.5" height="10.5" viewBox="0 0 24 24">
          <path fill="${color}" stroke="#000" stroke-width="2" d="M20 12l-18 12v-24z">
          </path>
        </svg>`
            : ""
        }
       
      </div>
    </div>
    `;
  const content = divIcon({
    className: "custom-popup",
    html: div,
    iconAnchor: [10, 10],
  });
  return <Marker icon={content} position={points}></Marker>;
};

export default CustomMarker;
