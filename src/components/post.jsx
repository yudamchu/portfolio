import React from 'react';

function post({children}) {
    return (
        <div className='post-container'>
           <img src='profile.png' alt='profile-img' className='profile-img'/>
           <div className='post-contents'>
             {children}
           </div> 
        </div>
    );
}

export default post;