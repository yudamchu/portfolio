import React from 'react';
import styles from '../assets/css/CardBox.module.css'
function CardBox({children}) {
    return (
        <div className={styles.cardBox}>
           {children} 
        </div>
    );
}

export default CardBox;