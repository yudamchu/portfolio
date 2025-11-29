import React from 'react';
import '../assets/css/WelcomePageStyle.css'

function WelcomePage(props) {
    return (
        <div className='welcome-container'>
           <img src='waving-hand.png' alt="welcome-icon" className="welcome-icon" />
            <h1>Welcome! 프론트앤드 개발자 추유담의 포트폴리오에 오신 걸 환영합니다!</h1>
           <img src='woman-technologist.png' alt="welcome-icon" className="welcome-icon" />
        </div>
    );
}

export default WelcomePage;