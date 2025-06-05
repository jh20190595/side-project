'use client';

import { PieChart, Pie, Cell } from 'recharts';
import { useState, useEffect } from 'react';
import styles from './Result.module.css';
import Image from 'next/image';

export default function GaugeChart({ percentile }) {
  const full = [{ value: 100 }];
  const over = [{ value: 100 }];
  const [tier, setTier] = useState('');

  useEffect(() => {
    const tierRanges = [
      { max: 20, tier: '/challenger.webp' },
      { max: 40, tier: '/diamond.webp' },
      { max: 60, tier: '/gold.webp' },
      { max: 80, tier: '/silver.webp' },
      { max: 100, tier: '/bronze.webp' }
    ]
    const mytier = tierRanges.find(range => percentile <= range.max)?.tier || '';

    setTier(mytier)
  }, [percentile])

  const endAngle = (180 * percentile) / 100;

  return (
    <div className={styles.GagueChartContainer}>
      <PieChart width={500} height={180}>
        <Pie
          data={full}
          startAngle={180}
          endAngle={0}
          cx="50%"
          cy="100%"
          innerRadius={125}
          outerRadius={150}
          dataKey="value"
          isAnimationActive={false}
        >
          <Cell fill="#eeeeee" />
        </Pie>

        <Pie
          data={over}
          startAngle={180}
          endAngle={endAngle}
          cx="50%"
          cy="100%"
          innerRadius={125}
          outerRadius={150}
          dataKey="value"
        >
          <Cell fill="#00C49F" />
        </Pie>
      </PieChart>

      <h2 style={{ marginTop: '2rem' }}>
        당신은 <strong>상위 {percentile}%</strong>입니다
      </h2>
      <div className={styles.TierImage}>

        <Image
          src={tier || '/default.webp'}
          alt='티어로고'
          width={120}
          height={50}
          quality={100}
          priority
        />
      </div>
    </div>
  );
}
