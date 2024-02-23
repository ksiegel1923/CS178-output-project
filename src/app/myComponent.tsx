"use client";
import React, { useMemo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

import { useEffect, useRef } from "react";

const containerStyle = {
  width: "400px",
  height: "400px",
};

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "API_Key",
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={{ lat: 18.52043, lng: 73.856743 }} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
// function MyComponent({
//   center,
//   zoom,
// }: {
//   center: google.maps.LatLngLiteral;
//   zoom: number;
// }) {
//   const ref = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     // Display the map
//     if (ref.current) {
//       new window.google.maps.Map(ref.current, {
//         center: center,
//         zoom: zoom,
//       });
//     }
//   }, [ref, center, zoom]);

//   return (
//     <span>
//       <div
//         ref={ref}
//         id="map"
//         style={{ width: "1000px", height: "700px" }}
//       ></div>
//     </span>
//   );
// }
// export default React.memo(MyComponent);
