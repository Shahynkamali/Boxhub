import type { FC } from "react";

import { useEffect, useState } from "react";
import {
  GoogleMap,
  MarkerF,
  useLoadScript,
  InfoWindowF,
} from "@react-google-maps/api";
import Geocode from "react-geocode";
import type { ModalProps } from "components";
import { Dialog, DialogContent, DialogHeader, Text } from "components";
import styles from "./MapDialog.module.scss";

interface Props extends Pick<ModalProps, "isOpen"> {
  onClose: () => void;
  originAddress: string;
  shippingAddress: string;
}
const googleMapsApiKey = import.meta.env.VITE_API_GOOLGE_API;
Geocode.setApiKey(googleMapsApiKey);

const MapDialog: FC<Props> = ({
  isOpen,
  onClose,
  originAddress,
  shippingAddress,
}) => {
  const [mapRef, setMapRef] = useState<google.maps.Map>();
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState({ id: 1, address: "" });
  const { isLoaded } = useLoadScript({ googleMapsApiKey });

  const handleMarkerClick = (
    id: number,
    lat: number,
    lng: number,
    address: string
  ) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, address });
    setIsWindowOpen(true);
  };

  const [originCordination, setOriginCordination] = useState({
    address: `Origin address: ${originAddress}`,
    lat: 0,
    lng: 0,
  });
  const [shippingCordination, setShippingCordination] = useState({
    address: `Shipping address: ${shippingAddress}`,
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    Geocode.fromAddress(originAddress).then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      setOriginCordination((prevState) => ({
        ...prevState,
        lat,
        lng,
      }));
    });
    Geocode.fromAddress(shippingAddress).then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      setShippingCordination((prevState) => ({
        ...prevState,
        lat,
        lng,
      }));
    });
  }, [originAddress, shippingAddress]);

  const markers = [originCordination, shippingCordination];

  const onMapLoad = (map: google.maps.Map) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  const renderMarkers = () =>
    markers.map(({ lat, lng, address }, index) => (
      <MarkerF
        onClick={() => handleMarkerClick(index, lat, lng, address)}
        key={index}
        position={{ lat, lng }}
      >
        {isWindowOpen && infoWindowData?.id === index && (
          <InfoWindowF
            position={{ lat, lng }}
            onCloseClick={() => setIsWindowOpen(false)}
          >
            <Text>{infoWindowData.address}</Text>
          </InfoWindowF>
        )}
      </MarkerF>
    ));

  const renderMap = () =>
    isLoaded ? (
      <GoogleMap
        onClick={() => setIsWindowOpen(false)}
        mapContainerClassName={styles.map}
        onLoad={onMapLoad}
      >
        {renderMarkers()}
      </GoogleMap>
    ) : (
      <Text>Loading..</Text>
    );
  return (
    <Dialog onClose={onClose} isOpen={isOpen}>
      <DialogHeader onClose={onClose}>
        <Text type="h2">Shipping Map</Text>
      </DialogHeader>
      <DialogContent>{renderMap()}</DialogContent>
    </Dialog>
  );
};
export { MapDialog };
