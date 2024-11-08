'use client';

import { useState, useEffect } from 'react';
import styles from './mainText.module.css';

export default function MainText() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const handleMouseMove = (event) => {
            if (isHovered) {
                setMousePosition({ x: event.clientX, y: event.clientY });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isHovered, isClient]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const moveAmountX = isClient ? (mousePosition.x - window.innerWidth / 2) / 50 : 0;
    const moveAmountY = isClient ? (mousePosition.y - window.innerHeight / 2) / 50 : 0;

    return (
        <div
            className={styles.centerText}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `translate(-50%, -50%) translate(${moveAmountX}px, ${moveAmountY}px)`,
            }}
        >
            <h1>FULL-CYCLE EVENT AGENCY</h1>
        </div>
    );
}
