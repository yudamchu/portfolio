import React from 'react';
import Post from '../components/post';
import PageHeader from '../components/PageHeader';
import { useState } from 'react';
import InputCard from '../components/InputCard';
import ContentBox from '../components/ContentBox';
import { motion } from "framer-motion";
import styles from '../assets/css/ContactPage.module.css';

function ContactPage(props) {
  const [pageName, setPageName] = useState("연락처");
  const [inputArr, setInputArr] = useState([]);

 
    return (
        <div>
           <PageHeader pageName={pageName}/>
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
           <Post>
              <p>연락처: 010-3078-7015</p>
              <p>이메일: yudam99@naver.com</p>
              <p>gitHub: <a href="https://github.com/yudamchu">yudamChu</a></p>
              <p>기술블로그: <a href="https://www.notion.so/2178be00b1c38019992fe501b9b619df?source=copy_link">yudam's Notion</a></p>
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