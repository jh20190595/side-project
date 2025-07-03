import clothData from '@/lib/clothData';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/component/GameCloth.module.css'

export default function GameCloth() {

    return (
        <div className={styles.quizcontainer}>
            <div className={styles.quizimagewrap}>
                <Image
                    src={clothData[0].ImageUrl}
                    alt='의류 사진'
                    width={300}
                    height={200}
                />
            </div>

            <div className={styles.quiztextwrap}>
                <h1 style={{ fontSize: '24px' }}>쇼핑 감각 테스트</h1>
                <p style={{ fontSize: '16px' }}>사진을 보고 가격을 맞춰보세요</p>
                <p style={{ fontSize: '11px' }}>*가격은 정가를 기준으로 출제됩니다.</p>
            </div>

            <div className={styles.typebtncontainer}>
                <ul className={styles.typebtnwrap}>
                    <Link href="/play/top">
                        <li><button>상의</button></li>
                    </Link>
                    <Link href='/play/bottom'>
                        <li><button>하의</button></li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}