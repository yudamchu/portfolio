import React from 'react';
import styles from '../assets/css/ContentBox.module.css';

function ContentBox({children}) {
    return (
        <div className={styles.scroll}>
            <div className={styles.contentBox}>
                {children}
            </div>
        </div>
    );
}

export default ContentBox;