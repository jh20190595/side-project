export const metadata = {
  title: 'howmuch - 블로그',
  description: '일상 속 가격 변화와 소비 트렌드에 대한 정보',
};

import Link from 'next/link';

export default function BlogPage() {
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        일상 속 가격 감각, 얼마나 변했을까?
      </h1>

      <p>“요즘 물가 왜 이렇게 비싸졌지?” 누구나 한 번쯤 해봤을 이 말, 실제로 얼마나 올랐을까요?</p>

      <h2 style={{ marginTop: '2rem' }}>🥔 과자 가격, 그때는 맞고 지금은 틀리다?</h2>
      <h3>◾ 1990년대 대표 과자 가격</h3>
      <ul>
        <li>새우깡 1봉지: <strong>300원</strong></li>
        <li>초코파이: <strong>150원</strong></li>
        <li>고래밥: <strong>250원</strong></li>
        <li>감자칩: <strong>500원</strong></li>
      </ul>

      <h3>◾ 2025년 현재 과자 가격</h3>
      <ul>
        <li>새우깡: <strong>1,800원</strong></li>
        <li>초코파이(2개입): <strong>1,500원</strong></li>
        <li>고래밥: <strong>1,700원</strong></li>
        <li>감자칩: <strong>2,200원</strong></li>
      </ul>

      <p>30년 사이 최소 5~6배 가까이 가격이 올랐습니다. 특히 요즘은 <strong>슈링크플레이션</strong>(양은 줄이고 가격은 유지)이 체감되기도 합니다.</p>

      <h2 style={{ marginTop: '2rem' }}>👕 의류 소비, 오프라인에서 온라인으로</h2>

      <h3>◾ 2000년대 이전</h3>
      <ul>
        <li>옷은 백화점, 로드숍에서 ‘입어보고 사는 것’이 기본</li>
        <li>정가 판매가 중심이고, 할인율도 제한적</li>
      </ul>

      <h3>◾ 2020년대 이후</h3>
      <ul>
        <li>무신사, 지그재그, 브랜디 등 온라인 플랫폼 급성장</li>
        <li>사이즈 후기와 착샷 리뷰로 오프라인 피팅 대체</li>
        <li>상시 할인, 빠른 트렌드, 리뷰 기반 소비</li>
      </ul>

      <p>
        📊 한 통계에 따르면, 2024년 기준 온라인 의류 구매 비중은 전체의 70%를 넘었습니다.
      </p>

      <h2 style={{ marginTop: '2rem' }}>🛍 앞으로 의류 가격은?</h2>
      <ul>
        <li>📈 <strong>단가 상승:</strong> 원단, 인건비 지속 상승</li>
        <li>⚖ <strong>브랜드 양극화:</strong> 초저가 / 고가 브랜드 중심 생존</li>
        <li>🤖 <strong>AI 개인화:</strong> 스타일링 추천이 가격 결정에도 영향</li>
      </ul>

      <p>👉 요약: 앞으로 의류 가격은 <strong>상승 + 프리미엄화</strong>가 동시에 진행될 가능성이 높습니다.</p>

      <h2 style={{ marginTop: '2rem' }}>🎯 퀴즈로 확인해보세요!</h2>
      <p>정확한 가격 감각, 과연 여러분은 갖추고 계신가요?</p>
      <ul>
        <li><Link href="/play/guess/snack">과자 가격 맞추기 퀴즈</Link></li>
        <li><Link href="/play/guess/clothes">의류 가격 맞추기 퀴즈</Link></li>
      </ul>

      <p style={{ marginTop: '3rem', fontStyle: 'italic' }}>
        howmuch 블로그는 일상 속 가격 변화, 소비 트렌드, 재미있는 경제 감각을 퀴즈와 함께 제공합니다.
        <br />
        더 많은 이야기를 알고 싶다면 <Link href="/">홈으로 돌아가기</Link>.
      </p>
    </div>
  );
}
