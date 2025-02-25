'use client';

import styles from './button.module.css';

export default function MyButton() {
  const onClick = () => {
    alert('Button clicked!');
  };

  return (
    <button className={styles.button} onClick={onClick}>
      Aliquam Porta 
    </button>
  );
}
