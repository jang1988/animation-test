import Link from 'next/link';
import styles from './menu.module.css';

export default function Menu() {
    return (
        <div className={styles.menu}>
            <Link href={"/barba"} className={styles.where}>where?</Link>
            <Link href={"/barba"} className={styles.what}>what?</Link>
            <Link href={"/barba"} className={styles.who}>who?</Link>
          </div>
    );
}
