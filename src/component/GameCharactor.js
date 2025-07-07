
import styles from './GameSnack.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function GameSnack() {
    return (
        <div className={styles.quizcontainer}>
            <div className={styles.quizimagewrap}>
                <Image
                    src="/인물사진/손흥민1.jpg"
                    alt='인물 사진'
                    width={300}
                    height={200}
                />
            </div>

            <div className={styles.quiztextwrap}>
                <h1 style={{ fontSize: '24px', color: 'black' }}>인물 퀴즈</h1>
                <p style={{ fontSize: '16px' }}>사진을 보고 3초 안에 인물을 맞춰보세요</p>
                <p style={{ fontSize: '16px' }}>* 활동명을 기준으로 제출됩니다.</p>
                <p style={{ fontSize: '11px' }}>* 빠름 주의</p>
            </div>
            <div className={styles.typebtncontainer}>
                <Link href="/play/guess/charactor">
                    <button>문제 풀기</button>
                </Link>
            </div>
        </div>
    )
}