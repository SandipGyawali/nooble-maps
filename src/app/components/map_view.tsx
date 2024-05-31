"use client";
import {
  MapContainer,
  Marker,
  Popup,
  ZoomControl,
  TileLayer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import useStore from "@/app/store/store";
import { useEffect } from "react";
import { ResetCenterViewProps } from "../interface";

// fixes for default marker icon issue
// delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

/**
 *
 * @param props
 * @Note zoom the specified location from
 * the list navigating to the specified location
 */
function ResetCenterView(props: ResetCenterViewProps): null {
  const { selectPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(L.latLng(...selectPosition), map.getZoom(), {
        animate: true,
      });
    }
  }, [selectPosition, map]);
  return null;
}

/**
 * @Note open street map with the it's specification
 */
function Map(): JSX.Element {
  const { selectedPosition } = useStore();
  return (
    <MapContainer
      className="w-screen h-screen z-0"
      zoom={8}
      center={[51.505, -0.09]}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {selectedPosition ? (
        <>
          <Marker position={selectedPosition}>
            <Popup>You Selected Me</Popup>
          </Marker>
          <ResetCenterView selectPosition={selectedPosition} />
        </>
      ) : (
        ""
      )}
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
}

export default Map;
