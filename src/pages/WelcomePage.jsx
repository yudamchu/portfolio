import React from 'react';
import styles from '../assets/css/WelcomePageStyle.module.css'
import PageHeader from '../components/PageHeader';
import InputCard from '../components/InputCard';
import { useState } from 'react';
import ContentBox from '../components/ContentBox';
import Post from '../components/post';
import NavCard from '../components/NavCard';
import CardBox from '../components/CardBox';

function WelcomePage(props) {
    const [inputArr, setInputArr] = useState([]);

    const cardContents = [
        {
            title: "프로필 보기",
            description: "기술 역량과 이력을 확인하세요.",
            imgSrc: 'slack-card-img3.png',
            link: '/profile',
            backgroundColor: '#f7eeff'
        },
        {
            title: "프로젝트 보기",
            imgSrc: 'slack-card-img1.png',
            link: '/project',
            backgroundColor: '#E0FFFF'
        },
        {
            title: "연락처 보기",
            imgSrc: 'slack-card-img4.png',
            link: '/contact',
            backgroundColor: '#FFFACD'
        }
    ]
    return (
        <>
        <PageHeader pageName={"welcome"}/>
            <ContentBox>
            <div className={styles.welcomeContainer}>
                <img src='waving-hand.png' alt="welcome-icon" className={styles.welcomeIcon}/>
                    <h1>Welcome! 프론트앤드 개발자 추유담의 포트폴리오에 오신 걸 환영합니다!</h1>
                <img src='woman-technologist.png' alt="welcome-icon" className={styles.welcomeIcon} />
           </div>
           <div className={styles.introduceBox}>
                <p>안녕하세요. 고객의 시선에서 UI를 구현하는 프론트엔드 개발자 추유담 입니다.</p>
                <CardBox>
                    {
                        cardContents.map((card, index) => (
                            <NavCard 
                                key={index}
                                link={card.link}
                                backgroundColor={card.backgroundColor}
                                cardTitle={card.title}
                                cardInfo={card.description}
                                cardImg={card.imgSrc}
                            />
                        ))
                    }
                </CardBox>
            </div>
            {
            inputArr.length > 0 && inputArr.map(post => (
              <Post>
                {post}
              </Post>
            ))
           }
            </ContentBox>
        <InputCard inputArr={inputArr} setInputArr={setInputArr}/>
        </>
    );
}

export default WelcomePage;