// import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./actionImage.module.css";

export default function ActionImage() {
  return (
    <div className={styles.mainContainer}>
      <Image
        src="https://images.unsplash.com/photo-1616279967983-ec413476e824?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero"
        width={1200} 
        height={800} 
        className={styles.image}
        priority
      />
    </div>
  );
}

