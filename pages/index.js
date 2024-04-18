import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Responsive Page</h1>
      <div className={styles.image}>
        <Image src="/flower.jpg" alt="Flower" width={200} height={200} />
        <Image src="/sunset.jpg" alt="Sunset" width={200} height={200} />
        <Image src="/forest.jpg" alt="Forest" width={200} height={200} />
      </div>
    </div>
  );
}
