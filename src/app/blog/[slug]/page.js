const blogPosts = {
  'adsense-guide': {
    title: '구글 애드센스 승인 받는 법 (실패 후 통과 경험 정리)',
    content: `처음에는 콘텐츠 부족으로 인해 구글 애드센스 승인을 받지 못했습니다. 원인은 단 하나의 글뿐이었고, 다른 페이지는 거의 비어 있었기 때문입니다. 이후 정보를 찾아가며 블로그 구조를 정비하고 정보성 콘텐츠를 다수 추가한 뒤, 드디어 승인받을 수 있었습니다.

애드센스 승인 팁 요약:
- 최소 5개의 정보성 글 (각 글은 800자 이상)
- 개인정보처리방침, 사이트 소개 페이지 필수
- 광고 없이도 유익한 내용
- 이미지보다 텍스트 위주의 콘텐츠 구성

이 글은 저처럼 애드센스 승인에 실패했던 분들에게 실질적인 도움을 주기 위해 작성되었습니다.`,
  },
  'price-quiz-game': {
    title: '가격 맞히기 퀴즈 게임 제작기',
    content: `이 프로젝트는 사용자가 옷, 음식, 간식 등의 가격을 맞히는 퀴즈 게임입니다. 'howmuch'라는 이름으로 개발했으며, Next.js와 App Router를 기반으로 구성했습니다. 사용자는 항목을 보고 가격 범위를 선택하고, 점수를 획득하며 순위를 확인할 수 있습니다.

기획 의도:
- 유저가 직관적으로 즐길 수 있는 캐주얼 퀴즈 게임 개발
- 실생활 소비 감각과 재미 요소를 결합

기술 스택:
- Next.js, Supabase
- useEffect와 useState를 활용한 상태관리
- 타이머 기능 및 자동 제출 로직 구현

게임을 직접 해보며 사용자 반응을 테스트하고, 데이터를 바탕으로 개선할 예정입니다.`,
  },
  'nextjs-app-router': {
    title: 'Next.js App Router 구조 정리 및 사용 팁',
    content: `App Router는 Next.js 13부터 도입된 새로운 라우팅 시스템으로, 폴더 구조 중심으로 동작합니다. 페이지 구성, 레이아웃 분리, SEO 설정까지 훨씬 명확하게 관리할 수 있습니다.

핵심 구조:
- app/ 폴더 하위에 page.js, layout.js, [slug]/page.js로 구성
- generateMetadata로 SEO 대응 가능
- notFound() 함수로 404 페이지 처리

팁:
- SEO 최적화를 위해 Head 설정 필수
- 필요한 경우 dynamicParams를 활용해 SSR 구성 가능

이 글에서는 App Router 도입 시 주의할 점과 실무에서 유용한 구성을 공유합니다.`,
  },
  'js-array-methods': {
    title: 'slice, map, reverse: JS 배열 메서드 실전 활용법',
    content: `프론트엔드 개발에서 자주 사용하는 JS 배열 메서드들을 실전 예제와 함께 정리해 봅니다.

slice(): 원본 배열을 변경하지 않고 일부를 추출
map(): 각 요소를 변형하여 새 배열 생성
reverse(): 배열 순서 뒤집기 (주의: 원본 배열 변경)

예제:
const arr = ['a', 'b', 'c', 'd'];
const sliced = arr.slice(1, 3); // ['b', 'c']
const mapped = arr.map(x => x.toUpperCase());
const reversed = [...arr].reverse(); // 원본 보호

이러한 메서드는 UI 구성 로직, 퀴즈 정답 체크, 필터링 기능 등에 자주 활용됩니다.`,
  },
  'vercel-deploy-guide': {
    title: '무료 도메인 + Vercel로 웹사이트 배포하기',
    content: `이 글은 개인 프로젝트를 세상에 공개하고 싶은 분들을 위한 실전 배포 가이드입니다.

1. 무료 도메인 얻기
- Freenom, Dot.tk 등에서 .ml, .ga 도메인 구입 가능
- 또는 Namecheap, GoDaddy에서 .com 도메인을 저렴하게 구매

2. Vercel에 배포
- GitHub 저장소에 코드 push
- Vercel과 GitHub 연동 후 자동 배포

3. 도메인 연결하기
- Vercel 프로젝트 → Settings → Domains → Add
- Freenom에서 NS 설정하거나 A레코드 지정

도메인을 연결하면 더 신뢰도 높은 사이트로 인식되고, 애드센스 승인 확률도 높아집니다.`,
  },
};

export default function BlogPost({ params }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return <div style={{ padding: '24px', color: 'red' }}>해당 글을 찾을 수 없습니다.</div>;
  }

  return (
    <main style={{ padding: '24px' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '16px' }}>{post.title}</h1>
      <p style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>{post.content}</p>
    </main>
  );
}
