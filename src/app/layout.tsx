import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'howmuch',
  description: '가격 맞히기 퀴즈 웹사이트',
  other: {
    'google-site-verification': 'I1t5Ha8W3oSgUN13s0D-j9oE1IHWTB5-vPD4dTq_n3A',
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <html lang ="ko">
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
                    src="/howmuch_logo.svg"
                    alt='로고'
                    width={130}
                    height={30} />
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






