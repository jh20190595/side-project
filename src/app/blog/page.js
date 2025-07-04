import Link from 'next/link';

const posts = [
  { slug: 'adsense-guide', title: '구글 애드센스 승인 받는 법' },
  { slug: 'price-quiz-game', title: '가격 맞히기 퀴즈 게임 제작기' },
  { slug: 'nextjs-app-router', title: 'Next.js App Router 구조 정리' },
  { slug: 'js-array-methods', title: 'JS 배열 메서드 실전 활용법' },
  { slug: 'vercel-deploy-guide', title: 'Vercel 배포 및 도메인 연결하기' },
];

export default function BlogPage() {
  return (
    <main style={{ padding: '24px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>블로그</h1>
      <ul>
        {posts.map(({ slug, title }) => (
          <li key={slug} style={{ marginBottom: '8px' }}>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}