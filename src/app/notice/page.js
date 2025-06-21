'use client';

import { useState } from 'react';
import styles from './page.module.css';

export const metadata = {
    title : 'howmuch - 공지사항',
    description : '공지사항 설명'
}

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
                        <li className={styles.NoticeSubItem}>- 과자 맞추기 </li>
                        <li className={styles.NoticeSubItem}>- 지역별/브랜드별 가격 비교 퀴즈</li>
                    </ul>
                )}
                </li>
            </ul>
        </div>
    )
}