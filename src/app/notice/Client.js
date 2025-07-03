'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function NoticeClient() {

    const [IsActive, setIsActive ] = useState(false);

    return (
        <div className={styles.NoticeContainer}>

            <div className={styles.NoticeTop}>
                <h2>📢 공지사항 </h2>
            </div>
            <ul className={styles.NoticeWrap}>
                <li className={styles.NoticeItem}>&apos;howmuch&apos;는 당신의 가격 감각을 테스트하는 웹사이트입니다.</li>

                <li className={styles.NoticeItem} onClick={ () => setIsActive(prev => !prev)}><strong>앞으로 추가될 예정이에요!</strong>
                { IsActive && (
                    <ul>
                        <li className={styles.NoticeSubItem}>- 과자 맞추기 </li>
                        <li className={styles.NoticeSubItem}>- 다양한 퀴즈 유형 ex. 인물퀴즈</li>
                    </ul>
                )}
                </li>

                <li className={styles.NoticeItem}>
                    <Link href='/policy' className={styles.NoticeLink}>
                        개인정보처리방침 (2025.06.20)
                    </Link>
                </li>
            </ul>
        </div>
    )
}