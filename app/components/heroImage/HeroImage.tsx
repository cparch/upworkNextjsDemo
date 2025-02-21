"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./HeroImage.module.css";

export default function HeroImage() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const newScale = Math.max(0.5, 1 - window.scrollY * 0.0005); // Shrinks down to 50% of original size
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles['sticky-child']}
        style={{ transform: `scale(${scale})`, transition: "transform 0.1s ease-out" }}
      >
        
        <Image
          src="https://media.istockphoto.com/id/1136527077/vector/vector-colorful-headphones-or-music-sound-earphones-silhouette-with-abstract-geometry-lines.jpg?s=612x612&w=0&k=20&c=zF13-2kHb813afiRo2P7wrB-NZtQNJ-QHpWXoM5PCSA=" // Replace with your image path" // Replace with actual image
          alt="Hero"
          width={1200} 
          height={800} 
          className={styles.image}
          priority
        />
      </div>
    </div>
  );
}

