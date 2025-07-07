import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: '아맞다',
  description: '아맞다는 의류 감각 테스트, 추억의 가격, 예능 인물 퀴즈 맞추기 등 다양한 퀴즈로 구성된 웹 사이트입니다.',
  openGraph: {
    title: '아맞다 - 퀴즈 웹사이트',
    description: '다양한 퀴즈로 나의 감각을 테스트하고 친구들과 공유해보세요!',
    url: 'https://howmuchh.vercel.app',
    siteName: '아맞다',
    images: [
      {
        url: 'https://howmuchh.vercel.app/아맞다로고.png',
        width: 800,
        height: 400,
        alt: '아맞다 대표 이미지',
      },
    ],
    type: 'website',
  },
  other: {
    'google-site-verification': 'I1t5Ha8W3oSgUN13s0D-j9oE1IHWTB5-vPD4dTq_n3A',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <html lang="ko">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6716098438139577"
          crossOrigin="anonymous"></script>
      </head>
      <body>
        <header>
          <div className='nav-container'>
            <div className='nav-top'>
              <div className='nav-logo'>
                <Link href='/'>

                    <Image
                      className='logoImage'
                      src="/아맞다로고.png"
                      alt='로고'
                      width={100}
                      height={30}
                    />
                </Link>
              </div>
              <div className='nav-signup-container'>
                <ul className='nav-signup'>
                  <li>
                    <Link href="/"><button className="nav-signup-btn">Home</button></Link>
                  </li>
                  <li>
                    <Link href="/notice"><button className="nav-signup-btn">공지</button></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        {children}

      </body>
    </html >
  )
}






