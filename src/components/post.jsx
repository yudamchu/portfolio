import React from 'react';
import styles from '../assets/css/PostStyle.module.css';

function Post({children}) {
    return (
        <div className={styles.postContainer}>
           <img src='profile.png' alt='profile-img' className={styles.profileImg}/>
           <div className= {styles.postContents}>
             <p className={styles.nickname}>추유담</p>
             {children}
           </div> 
        </div>
    );
}

export default Post;