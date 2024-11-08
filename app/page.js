'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './page.module.css';
import Logo from '@/components/logo/logo';
import Menu from '@/components/menu/menu';
import MainText from '@/components/mainText/mainText';
import Showreel from '@/components/showReel/showReel';
import AgentEvent from '@/components/agentEvent/agentEvent';
import Lang from '@/components/lang/lang';

export default function Home() {

    return (
        <>
            <div
                className={styles.main}
            >
                <div className={styles.overlay}>
                    <Logo />
                    <Lang />
                    <MainText />
                    <Menu />
                    <Showreel />
                    <AgentEvent />
                </div>
            </div>
        </>
    );
}
