
import styles from './GameFood.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function GameFood() {
    return (
        <div className={styles.quizcontainer}>
            <div className={styles.quizimagewrap}>
                <Image
                    src='/th.jpg'
                    alt='logo'
                    width={300}
                    height={200}
                />
            </div>

            <div className={styles.quiztextwrap}>
                <h1 style={{ fontSize: '24px', color : 'black' }}>가격 감각 테스트</h1>
                <p style={{ fontSize: '16px' }}>사진을 보고 가격을 맞춰보세요</p>
                <p style={{ fontSize: '11px' }}>*가격은 출시가를 기준으로 출제됩니다.</p>
            </div>
            <div className={styles.typebtncontainer}>
                <Link href="/play/food">
                    <button>문제 풀기</button>
                </Link>  
            </div>
        </div>
            )
}