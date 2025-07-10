// src/app/game/[type]/page.js
import Comment from '@/component/Comment';
import GameCloth from '@/component/GameCloth';
import GameFood from '@/component/GameFood';
import GameSnack from '@/component/GameSnack';
import GameCharactor from '@/component/GameCharactor';
import styles from './page.module.css';
import { use } from 'react';

export function generateMetadata({ params }) {
  const { type } = params;

  const titleMap = {
    food: '옛날 음식 가격 맞추기',
    cloth: '의류 가격 맞추기',
    snack : '과자 이름 맞추기',
    charactor : '신서유기 인물 퀴즈'
  };

  const descMap = {
    food: '추억의 음식 가격 퀴즈! 당신은 기억하나요?',
    cloth: '패션 감각 테스트!',
    snack : '모자이크 처리된 사진을 보고 과자 맞추기',
    charactor : '제한시간 안에 인물 맞추기'
  };

  const imageMap = {
    food: '/옛날제품사진/김밥.jpg',
    cloth: '/옛날제품사진/홈런볼.jpg',
    snack : '/과자사진/초코파이.jpg',
    charactor : '/인물사진/고윤정.jpg'
  };

  return {
    title: titleMap[type] || '가격 퀴즈',
    description: descMap[type] || '당신의 감각을 테스트해보세요!',
    openGraph: {
      title: titleMap[type],
      description: descMap[type],
      images: [imageMap[type] || '/옛날제품사진/너구리.jpg'],
      url : 'https://amatda.vercel.app',
      type : 'website',
    },
  };
}

export default function GamePage({ params }) {
  const { type } = use(params);

  const gameMap = {
    cloth: GameCloth,
    food: GameFood,
    snack : GameSnack,
    charactor : GameCharactor,
  };

  const GameComponent = gameMap[type];

  if (!GameComponent) return <div>존재하지 않는 게임입니다</div>;

  return (
    <div className={styles.GameCompoentContainer}>
      <GameComponent />
      <Comment type={type} />
    </div>
  );
}
