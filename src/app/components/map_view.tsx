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

function ResetCenterView(props: any): null {
  const { selectPosition } = props;
  const map = useMap();

  console.log(selectPosition);
  useEffect(() => {
    if (!selectPosition) {
      map.setView(
        L.latLng(selectPosition?.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true,
        }
      );
    }
  }, [selectPosition, map]);
  return null;
}

function Map(): JSX.Element {
  const { places } = useStore();

  return (
    <MapContainer
      className="w-screen h-screen z-0"
      zoom={13}
      center={[51.505, -0.09]}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.length !== 0
        ? places.map((data, index) => (
            <Marker position={[data?.lat, data?.lon]} key={index}>
              <ResetCenterView selectPosition={data} />
            </Marker>
          ))
        : ""}

      <ZoomControl position="bottomright" />
    </MapContainer>
  );
}

export default Map;
