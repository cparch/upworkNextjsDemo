import Image from "next/image";
import styles from "./page.module.css";
import  HeroImage  from "./components/heroImage/HeroImage" 
// import { Roboto } from '@next/font/google'
import MyButton from "./components/button/Button";
import BundleIcon from "./components/iconbundle/IconBundle";
import InfoSection from "./components/infoSection/InfoSection";

//Tomorrow get finish the:
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.sectionOne}>          <HeroImage/>  
          <div className={styles.textContainer}>
            <h1 className={styles.headerText}>Vestibulum at nibh at nulla</h1>
            <p className={styles.subHeaderText}>Vivamus purus mi, mollis nec elit vel, scelerisque rhoncus dolor.</p>
            <MyButton/>
          </div>
        </div>
        <div className={styles.sectionTwo}>
          <BundleIcon/>
        </div>
        <InfoSection/>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
