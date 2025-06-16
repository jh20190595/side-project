import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title : '가격 맞추기 퀴즈',
  description : '금전 감각 테스트',
  other : {
    'google-site-verification' : 'I1t5Ha8W3oSgUN13s0D-j9oE1IHWTB5-vPD4dTq_n3A'
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <html>
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

                  <Link href='/'><li><button className='nav-signup-btn'>Home</button></li></Link>
                  <Link href='/notice'><li><button className='nav-signup-btn'>공지</button></li></Link>
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






