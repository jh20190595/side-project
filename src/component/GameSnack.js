
import styles from './GameSnack.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function GameSnack() {
    return (
        <div className={styles.quizcontainer}>
            <div className={styles.quizimagewrap}>
                <Image
                    src="https://sitem.ssgcdn.com/84/69/96/item/1000641966984_i1_290.jpg"
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
                <Link href="/play/guess//snack">
                    <button>문제 풀기</button>
                </Link>  
            </div>
        </div>
            )
}