'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function NoticePage() {

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
                        <li className={styles.NoticeSubItem}>- 연도별 퀴즈 모음 (예: 1980년대, 2000년대)</li>
                        <li className={styles.NoticeSubItem}>- 지역별/브랜드별 가격 비교 퀴즈</li>
                    </ul>
                )}
                </li>
            </ul>
        </div>
    )
}