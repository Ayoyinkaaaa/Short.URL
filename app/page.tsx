import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Welcome from "./components/Welcome"
import Images from "./components/images";




export default function Home() {
  return (
    <main >
      <Header/>
      <Welcome/>
      <Images />
    </main>
  );
}
