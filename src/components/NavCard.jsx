import React from 'react';
import styles from "../assets/css/NavCard.module.css"
import { useNavigate } from 'react-router-dom';

function NavCard({link,backgroundColor, cardTitle, cardInfo, cardImg}) {
    const navigate = useNavigate();
 
    return (
        <div className={styles.navCardContainer} 
            onClick={() => navigate(link)}
            style={{backgroundColor}}>
            <h3 className={styles.navCardText}>{cardTitle}</h3>
            <p className={styles.navCardInfo}>{cardInfo}</p>
            <img src={cardImg} alt={cardImg} className={styles.navCardImg}/>
        </div>
    );
}

export default NavCard;