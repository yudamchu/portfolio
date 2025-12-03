import React from 'react';
import Post from '../components/post';
import PageHeader from '../components/PageHeader';
import { useState } from 'react';
import InputCard from '../components/InputCard';
import ContentBox from '../components/ContentBox';
import { motion } from "framer-motion";
import styles from '../assets/css/ContactPage.module.css';
import CardBox from '../components/CardBox';
import NavCard from '../components/NavCard';
import { FaPhone } from "react-icons/fa6";


function ContactPage(props) {
  const [inputArr, setInputArr] = useState([]);

  const cardContents = [
        {
            title: "전화 걸기",
            description: "바로 통화하기",
            imgSrc: 'slack-card-img6.png',
            href: 'tel:01030787015',
            backgroundColor: '#f7eeff'
        },
        {
            title: "메일 보내기",
            description: "이메일로 연락하기",
            imgSrc: 'slack-card-img5.png',
            href: 'mailto:yudam99@naver.com',
            backgroundColor: '#E0FFFF'
        }
    ]
 
    return (
        <div>
           <PageHeader pageName={"연락처"}/>
           <ContentBox>
            <div 
              className={styles.contactHeader}>
              <motion.img 
              src='mail.png' 
              alt='mail'
              initial={{ opacity: 0, y: -120 }}
              animate={{
                opacity: 1,
                y: [ -120, 10, -5, 0 ]  // 위→아래→살짝 위→착지
              }}
              transition={{
                duration: 1,
                ease: "easeOut"
             }}/>
              <h1>Contact with me</h1>
            </div>
            <div className={styles.introduceBox}>
                <CardBox>
                    {
                        cardContents.map((card, index) => (
                            <NavCard
                                key={index}
                                href={card.href}
                                backgroundColor={card.backgroundColor}
                                cardTitle={card.title}
                                cardInfo={card.description}
                                cardImg={card.imgSrc}
                            />
                        ))
                    }
                </CardBox>
            </div>
           <Post>
            <div className={styles.postContainer}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>📞 연락처</span>
                <a className={styles.href} href="tel:01030787015">010-3078-7015</a>
              </div>

              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>📧 이메일</span>
                <a className={styles.href} href="mailto:yudam99@naver.com">yudam99@naver.com</a>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>💻 GitHub</span>
              <a className={styles.href} href="https://github.com/yudamchu" target="_blank">yudamChu</a>
            </div>

            <div className={styles.infoRow}>
              <span className={styles.infoLabel}>📝 기술 블로그</span>
              <a className={styles.href} href="https://www.notion.so/2178be00b1c38019992fe501b9b619df?source=copy_link" target="_blank">
                yudam's Notion
              </a>
            </div>

          </div>
        </Post>

           {
            inputArr.length > 0 && inputArr.map(post => (
              <Post>
                {post}
              </Post>
            ))
           }
           </ContentBox>
           <InputCard inputArr={inputArr} setInputArr={setInputArr}/>
        </div>
    );
}

export default ContactPage;