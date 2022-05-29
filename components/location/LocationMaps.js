import "leaflet/dist/leaflet.css";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";

const myIcon = new Icon({
  iconUrl: "/assets/pin-location.svg",
  iconSize: [45, 45],
});

export default function MapComponent({ coords }) {
  return (
    <MapContainer
      center={coords}
      zoom={12}
      scrollWheelZoom={false}
      style={{
        height: "32rem",
        zIndex: "1",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coords} icon={myIcon}>
        {/* <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup> */}
      </Marker>
    </MapContainer>
  );
}
