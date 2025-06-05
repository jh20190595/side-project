import Link from "next/link"
import clothData from "@/lib/clothData"
import Image from "next/image"
import clothImage from '@/component/clothImage';

export default function MainPage() {

  return (
    <div className="main-container">
      <div className="quiz-list">
        <Link href="/game/cloth">
          <div className="quizbox-wrap">
            <div className="img-fixed-box">
              <Image src={clothData[0].ImageUrl} alt="image" width={200} height={200} />
            </div>
            <p>쇼핑 감각 테스트</p>
          </div>
        </Link>

        <Link href="/game/food">
          <div className="quizbox-wrap">
            <div className="img-fixed-box">
              <Image src='/th.jpg' alt="image" width={200} height={200} />
            </div>
            <p>그 시절 그 가격</p>
          </div>
        </Link>
      </div >
    </div >
  );
}