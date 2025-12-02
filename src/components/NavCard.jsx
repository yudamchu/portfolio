import React from 'react';
import styles from "../assets/css/NavCard.module.css"
import { useNavigate } from 'react-router-dom';

function NavCard({link, children}) {
    const navigate = useNavigate();
 
    return (
        <div className={styles.navCardContainer} onClick={() => navigate(link)}>
            {children}
        </div>
    );
}

export default NavCard;