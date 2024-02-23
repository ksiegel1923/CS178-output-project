"use client";
import Image from "next/image";
import styles from "./page.module.css";
import MyComponent from "./myComponent";
import { createRoot } from "react-dom/client";
import { Wrapper } from "@googlemaps/react-wrapper";
import ReactDOM from "react-dom";

export default function Home() {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;
  return (
    <main className={styles.main}>
      <MyComponent></MyComponent>
      {/* <Wrapper apiKey={"AIzaSyBzGiGIWB8Byg-S6Pn2qSUNSSULy4pmeF4"}>
        <MyComponent center={center} zoom={zoom} />
      </Wrapper> */}
    </main>
  );
}
