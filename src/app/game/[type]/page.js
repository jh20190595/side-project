'use client';

import Comment from '@/component/Comment';
import GameCloth from '@/component/GameCloth';
import GameFood from '@/component/GameFood';
import styles from './page.module.css';
import { use } from 'react';

export default function GamePage({ params }) {
  const { type } = use(params); 

  const gameMap = {
    cloth: GameCloth,
    food: GameFood,
  };

  const GameComponent = gameMap[type];

  if (!GameComponent) return <div>존재하지 않는 게임입니다</div>;

  return (
    <div className={styles.GameCompoentContainer}>
      <GameComponent />
      <Comment type= {type} />
    </div>   
  )   
}
