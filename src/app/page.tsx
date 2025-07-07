import Link from "next/link"
import clothData from "@/lib/clothData"
import Image from "next/image"

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

        <Link href="/game/snack">
          <div className="quizbox-wrap">
            <div className="img-fixed-box">
              <Image src="https://sitem.ssgcdn.com/84/69/96/item/1000641966984_i1_290.jpg" alt="image" width={200} height={200} />
            </div>
            <p>과자 종류 맞추기</p>
          </div>
        </Link>

        <Link href="/game/charactor">
          <div className="quizbox-wrap">
            <div className="img-fixed-box">
              <Image src="/인물사진/손흥민1.jpg" alt="image" width={200} height={200} />
            </div>
            <p>인물 퀴즈</p>
          </div>
        </Link>
      </div >
    </div >
  );
}