import Link from 'next/link'
import styles from './page.module.css';

export default function PolicyPage() {
  return (
    <div className={styles.policyContainer}>
      <Link href='/notice'>      
        <h1 className={styles.policyTitle}>개인정보 처리방침 {`(2024-06-20)`}</h1>
      </Link>

      <div className={styles.policyContentContainer}>
        <p className={styles.policyParagraph}>
          본 사이트(이하 "howmuch")는 사용자의 개인정보를 소중히 여기며, 『개인정보 보호법』을 준수합니다.
          본 방침은 howmuch에서 제공하는 퀴즈, 댓글, 광고 서비스와 관련하여 수집되는 개인정보의 처리 방침을 안내합니다.
        </p>

        <h2 className={styles.policyHeading}>1. 수집하는 개인정보 항목</h2>
        <p className={styles.policyParagraph}>
          howmuch는 회원가입 없이도 퀴즈를 이용할 수 있습니다. 다만, 댓글 작성 기능을 사용할 경우 다음과 같은 최소한의 개인정보를 수집합니다:
        </p>
        <ul className={styles.policyList}>
          <li>닉네임 (사용자 식별 목적)</li>
          <li>비밀번호 (댓글 삭제 요청 시 본인 확인용, 암호화하여 저장됨)</li>
          <li>댓글 내용 및 작성 일시</li>
        </ul>

        <h2 className={styles.policyHeading}>2. 개인정보 수집 및 이용 목적</h2>
        <ul className={styles.policyList}>
          <li>댓글 표시 및 사용자 식별</li>
          <li>비밀번호 기반의 본인 확인 및 댓글 삭제 기능 제공</li>
          <li>광고 제공을 위한 서비스 분석 및 사용자 통계 처리</li>
        </ul>

        <h2 className={styles.policyHeading}>3. 개인정보 보유 및 이용기간</h2>
        <p className={styles.policyParagraph}>
          사용자가 작성한 댓글 및 관련 정보는 사용자가 삭제 요청 시까지 보관되며, 삭제 요청이 있을 경우 즉시 파기됩니다.
          광고를 위한 쿠키 정보는 개별 광고 플랫폼의 정책에 따릅니다.
        </p>

        <h2 className={styles.policyHeading}>4. 광고 및 쿠키 사용에 대한 안내</h2>
        <p className={styles.policyParagraph}>
          howmuch는 Google AdSense 및 Kakao AdFit과 같은 광고 플랫폼의 광고를 게재할 수 있습니다.
          이 과정에서 광고 플랫폼은 사용자의 브라우저에 쿠키(cookie)를 설정하거나 기존 쿠키를 읽을 수 있습니다.
        </p>
        <ul className={styles.policyList}>
          <li>쿠키는 사용자 맞춤형 광고, 통계 수집, 광고 성과 분석을 위해 사용됩니다.</li>
          <li>사용자는 브라우저 설정을 통해 쿠키 저장을 차단하거나 삭제할 수 있습니다.</li>
        </ul>

        <h2 className={styles.policyHeading}>5. 제3자 제공에 대한 안내</h2>
        <p className={styles.policyParagraph}>
          howmuch는 원칙적으로 수집한 개인정보를 제3자에게 제공하지 않습니다.
          단, 광고 플랫폼(Google, Kakao 등)과의 연동을 통해 비식별 정보(쿠키 및 통계 정보 등)가 광고 제공 목적에 한하여 자동으로 전달될 수 있습니다.
        </p>

        <h2 className={styles.policyHeading}>6. 개인정보 보호를 위한 기술적 조치</h2>
        <ul className={styles.policyList}>
          <li>댓글 작성 시 입력되는 비밀번호는 암호화(해시 처리)되어 저장되며, 원문은 서버에 저장되지 않습니다.</li>
          <li>개인정보에 접근할 수 있는 관리자 권한은 최소한으로 제한되며, 보안 정책에 따라 관리됩니다.</li>
        </ul>

        <h2 className={styles.policyHeading}>7. 이용자 권리 및 행사 방법</h2>
        <ul className={styles.policyList}>
          <li>사용자는 본인이 작성한 댓글에 대해 비밀번호 입력을 통해 언제든지 삭제할 수 있습니다.</li>
          <li>쿠키 차단 및 삭제는 브라우저 설정(예: Chrome, Safari 등)에서 직접 수행할 수 있습니다.</li>
        </ul>

        <h2 className={styles.policyHeading}>8. 개인정보 처리방침의 변경</h2>
        <p className={styles.policyParagraph}>
          본 개인정보 처리방침은 관련 법령 및 서비스 변경에 따라 개정될 수 있으며, 변경 시 본 페이지를 통해 공지됩니다.
          본 방침은 2025년 6월 20일부터 적용됩니다.
        </p>

        <p className={styles.policyUpdated}>최종 수정일: 2025-06-20</p>
      </div>
    </div>
  );
}
