import React from 'react';
import PageHeader from '../components/PageHeader';
import ContentBox from '../components/ContentBox';
import InputCard from '../components/InputCard';
import { useState } from 'react';
import Post from '../components/post';
import styles from '../assets/css/Profile.module.css';
import { motion } from "framer-motion";
import CardBox from '../components/CardBox';

function ProfilePage(props) {
    const [inputArr, setInputArr] = useState([]);
    return (
        <div>
          <PageHeader pageName={"프로필"}/>
          <ContentBox>
            <div className={styles.ProfileHeader}>
              <motion.img 
                src='woman-technologist.png' 
                alt='about'
                initial={{ opacity: 0, y: -120 }}
                animate={{ opacity: 1, y: [ -120, 10, -5, 0 ] }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
              <h1>About Me</h1>
            </div>

            <p className={styles.introduceBox}>
              안녕하세요! 사용자 니즈를 분석해 UI를 만드는 것을 즐기는 프론트엔드 개발자 추유담입니다.
            </p>

            {/* ----- ABOUT SECTION ----- */}
            <Post>
              <div className={styles.postContainer}>
              <div className={styles.introContainer}>
                <h2>🥳 기본 정보</h2>
                <dl className={styles.profileList}>
                  <dt>이름</dt><dd>추유담</dd>
                  <dt>생년월일</dt><dd>1999.08.24</dd>
                  <dt>위치</dt><dd>서울 은평구</dd>
                  <dt>연락처</dt><dd>010-3078-7015</dd>
                  <dt>학력</dt><dd>University of Queensland<br/>Media & Digital Cultures, Psychology 복수전공</dd>
                  <dt>경력</dt><dd>아이아이컴바인드(젠틀몬스터) VMD 근무 (2024.05 ~ 2025.03)</dd>
                  <dt>교육</dt><dd>코리아아이티 신촌 UI/UX 응용 개발과정 수료 (2025.05 ~ 2025.11)</dd>
                </dl>
              </div>

            {/* ----- SKILLS SECTION ----- */}
            <div className={styles.introContainer}>
              <h2>🛠 Skills</h2>
              <p><strong>Languages</strong> — JavaScript, HTML5, CSS3</p>
              <p><strong>Frontend</strong> — React, Zustand, React Query, React Hook Form, CSS Modules, Media Queries, Vite</p>
              <p><strong>Tools</strong> — VS Code, IntelliJ, DBeaver, Postman</p>
              <p><strong>Collaboration</strong> — Git/GitHub, Slack, Notion</p>
            </div>

            {/* ----- TEAMWORK SECTION ----- */}
            <div className={styles.introContainer}>
              <h2>🤝 팀원으로서 저는</h2>
              <ul className={styles.listStyle}>
                <li>사용자 관점에서 문제를 해결하는 데 강점이 있습니다.</li>
                <li>재사용성을 고려해 아토믹 단위로 컴포넌트를 설계하고 개발합니다.</li>
                <li>기획부터 백엔드까지 서비스 전반을 이해하며 커뮤니케이션을 중요하게 생각합니다.</li>
              </ul>
            </div>
          </div>
          </Post>
        </ContentBox>
        <InputCard inputArr={inputArr} setInputArr={setInputArr}/>
        </div>
    );
}

export default ProfilePage;