'use client';
import { useEffect, useState } from 'react';
import styles from './agentEvent.module.css';

export default function AgentEvent() {
    const [text, setText] = useState('');

    useEffect(() => {
        // Повторяем строку 100 раз для бесконечного эффекта
        const repeatedText = Array(20)
            .fill('EVENT AGENCY EVENT AGENCY EVENT AGENCY')
            .join(' ');
        setText(repeatedText);
    }, []);

    return (
        <div className={styles.container}>
            <p className={styles.diagonalText}>{text}</p>
            <p className={styles.diagonalText2}>{text}</p>
        </div>
    );
}
