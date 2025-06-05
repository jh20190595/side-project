'use client';

import styles from './Result.module.css';
import GaugeChart from './GaugeChart';
import Link from 'next/link';
import CommentSection from '@/component/Comment';


export default function ResultPage({ type , mypercentile, correctCount }) {
    let GameType = '';

    if( type ==='food') {
        GameType = 'food'
    } else {
        GameType = 'cloth';
    }

    return (
        <div className={styles.ResultContainer}>

            <div className={styles.ResultLeft}>

                <div className={styles.resultText}>
                    <h1>{correctCount}개 맞히셨네요!</h1>
                </div>

                <GaugeChart percentile={mypercentile} />

                <div className={styles.btncontainer}>
                    <Link href = {`/game/${GameType}`}><button className={styles.ResetBtn}>다시하기</button></Link>
                    <Link href = '/'><button className={styles.HomeBtn}>홈으로</button></Link>
                </div>
            </div>


            <CommentSection type = {GameType} />

        </div>
    );
}
