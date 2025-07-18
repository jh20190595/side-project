
import styles from './GameSnack.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function GameSnack() {
    return (
        <div className={styles.quizcontainer}>
            <div className={styles.quizimagewrap}>
                <Image
                    src="https://sitem.ssgcdn.com/84/69/96/item/1000641966984_i1_290.jpg"
                    alt='과자 이미지'
                    width={300}
                    height={200}
                />
            </div>

            <div className={styles.quiztextwrap}>
                <h1 style={{ fontSize: '24px', color : 'black' }}>과자 맞추기</h1>
                <p style={{ fontSize: '16px' }}>가려진 사진을 보고 어떤 과자인지 맞추기</p>
                <p style={{ fontSize: '11px' }}>* 사진 출처 : ssg.com</p>
            </div>
            <div className={styles.typebtncontainer}>
                <Link href="/play/guess/snack">
                    <button>문제 풀기</button>
                </Link>  
            </div>
        </div>
            )
}