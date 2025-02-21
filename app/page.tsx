import Image from "next/image";
import styles from "./page.module.css";
import  HeroImage  from "./components/heroImage/HeroImage" 
import ActionImage from "./components/actionImage/ActionImage"
import CopyBox from "./components/copyBox/CopyBox";

export default function Home() {
  return (
    <div className={styles.page}>

      <main className={styles.main}>
        <div>HEADER</div>
        <HeroImage/>

        {/*
          Todo:
          - Put some big bold white text here at the bottom of the hero image
          - I want it bottom aligned so you don't see it at first, but as you scroll down it comes into view
          */}


        <div className={styles.imgContainer}>
          <ActionImage src='https://images.unsplash.com/photo-1616279967983-ec413476e824?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

          <CopyBox/>

          {/*
          Todo:
          - Center the image and the text to itself in the ActionImage component

          - combine actionImage and copyBox into a single component
          - make it so that the image and text can be passed in as props
          - make it so that the text can be positioned to the left or right of the image via props
          - these components will need to be stacked vertically
          
          */}
    
 
        </div>

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
