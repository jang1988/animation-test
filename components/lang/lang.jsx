import Image from 'next/image';
import styles from './lang.module.css';

export default function Lang() {
    return (
        <div className={styles.container}>
            <Image src={'/lang.png'} alt="lang" width={38} height={38} />
            <div className={styles.languageOptions}>
                <div className={styles.option}>RU</div>
                <div className={styles.option}>UA</div>
            </div>
        </div>
    );
}
