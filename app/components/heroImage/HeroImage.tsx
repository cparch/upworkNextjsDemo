import Image from "next/image";
import styles from "./HeroImage.module.css";

export default function HeroImage() {
  return (
    <div className={styles.container}>        
      <Image
        src="/clay-banks-_wkd7XBRfU4-unsplash.jpg"
        alt="Hero"
        width={2130} 
        height={1777} 
        className={styles.image}
        priority
      />
    </div>
  );
}

