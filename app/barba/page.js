import Link from 'next/link';
import styles from './page.module.css';
import * as motion from "framer-motion/client"
export default function Barba() {
    return (
        <>
            <motion.div
                className={styles.main}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ x: "100%", transition: {duration: 1} }}
            >
               
                <Link href={"/"} className={styles.who}>BACK</Link>
            </motion.div>
        </>
    );
}
