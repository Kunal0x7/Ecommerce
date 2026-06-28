import styles from "./Root.module.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "../NavBar";
import HamNav from "../HamNav";
import Footer from "../Footer/Footer";
export default function Root() {

  const [hamOpen, setHamOpen] = useState(false);
  console.log(hamOpen);
  function toggleHam() {
    setHamOpen(!hamOpen);
  }
  return (
    <section className={styles.main}>
      <NavBar toggleHam={toggleHam} />
      <HamNav hamOpen={hamOpen} closeAction={toggleHam} />
        <Outlet />
      <Footer />
    </section>
  );
}
