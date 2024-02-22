import Image from "next/image";
import styles from "./page.module.css";
import MyComponent from "./myComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <MyComponent></MyComponent>
    </main>
  );
}
