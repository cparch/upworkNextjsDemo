import styles from "./infosection.module.css";
import ConnectedCircles from "./connectedCircles/ConnectedCircles";
import Copy from "./copy/Copy";

export default function InfoSection() {
  return (
    <div className={styles.mainContainer}>
      <ConnectedCircles/>
      <Copy/>
    </div>
  );
}
