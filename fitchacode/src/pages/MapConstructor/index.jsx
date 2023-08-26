import React from "react";
import style from "./MapConstructor.module.scss";
import { YMaps, Map, Placemark, Polyline } from "react-yandex-maps";
function MapConstructor({ points }) {
  const mapState = {
    center: [55.751574, 37.573856], // Координаты центра карты (Москва)
    zoom: 9, // Масштаб карты
  };

  return (
    <YMaps>
      <Map
        state={mapState}
        width="100%"
        height="400px"
        defaultOptions={{
          suppressMapOpenBlock: true, // Убираем водяной знак
        }}
      >
        {points.map((point, index) => (
          <Placemark key={index} geometry={point.coordinates} />
        ))}
        <Polyline
          geometry={points.map((point) => point.coordinates)}
          options={{
            balloonCloseButton: false,
            strokeColor: "#00000088",
            strokeWidth: 3,
            strokeOpacity: 0.8,
          }}
        />
      </Map>
    </YMaps>
  );
}

export default MapConstructor;
