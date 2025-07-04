export default function AboutPage() {
  return (
    <main style={{ padding: '24px' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>사이트 소개</h1>
      <p style={{ lineHeight: '1.6' }}>
        howmuch는 실생활에서 접하는 옷, 음식 등의 가격을 퀴즈 형식으로 풀어보며, 
        소비 감각을 테스트하고 재미를 느낄 수 있도록 제작된 웹사이트입니다.
        <br /><br />
        본 사이트는 Next.js를 기반으로 개발되었으며, 사용자 경험을 고려하여 모바일/PC 모두에서 편하게 플레이할 수 있도록 구성되었습니다.
        <br /><br />
        제작자: 이재혁  
        <br />
        제작 목적: 웹 개발 연습 및 구글 애드센스 승인 실험
      </p>
    </main>
  );
}
