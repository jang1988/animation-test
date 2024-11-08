import styles from './logo.module.css';

export default function Logo() {
    return (
        <div className={styles.header}>
            <div className={styles.textTop}>MOZGI</div>
            <div className={styles.textBottom}>Event</div>
        </div>
    );
}
