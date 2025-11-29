import React, { useState, useEffect } from 'react';
import ProjectPage from '../pages/ProjectPage'
import BlogPage from '../pages/BlogPage'
import '../assets/css/MainPageStyle.css'
import { CaretRightIcon, ChannelIcon, ChevronDownIcon, ComposeIcon, SettingsIcon, ThreadsIcon } from '../assets/Icons/MainPageIcons';
import WelcomePage from './WelcomePage';
import { useLocation } from 'react-router-dom';

function MainPage(props) {
    const [id , setId] = useState('welcome');
    const [isResizing, setIsResizing] = useState(false); //리사이저 작동 유무
    const [menuWidth, setMenuWidth] = useState(200); //서브 메뉴 초기 값
    const [isDrop, setIsDrop] = useState(false);

    const [isActive, setIsActive] = useState(false);


    const welcomeBtn = () =>{
        setId('welcome');
        if(location.pathname === id){
            setIsActive(true);
        }
    }

    const projectBtn = () =>{
        setId('projects');
        if(location.pathname === id){
            setIsActive(true);
        }
    }

    const blogBtn = () =>{
         setId('blog');
        if(location.pathname === id){
            setIsActive(true);
        }
    }
    //리사이저 작동
    const startResize = () => {
        setIsResizing(true);
    }

   //✅
   //리사이저로 길이 조절
    useEffect(() => {
        const handleMouseMove = (e) => { if (isResizing) setMenuWidth(Math.min(400, Math.max(180, e.clientX))); };
        const handleMouseUp = () => setIsResizing(false);

        if (isResizing) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }
  
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    
    }, [isResizing]);

    return (
        <>
            <div className='main-container' style={{ gridTemplateColumns: `${menuWidth}px 1fr` }}>
                <nav className='menu-box'>
                    <div className='icon-box'>
                        <div className='name-box'>Yudam</div>
                        <div className='set-icons'>
                            <div><SettingsIcon/></div>
                            <div><ComposeIcon/></div>
                        </div>
                    </div>
                    <ul className='sub-menu'>
                        <li className={`path-btn ${id === 'welcome'? 'active' : null}`}>
                            <div><ThreadsIcon/></div> 
                            <div onClick={welcomeBtn}>Welcome</div>
                        </li>
                        <li className='works' onClick={() => setIsDrop(prev => !prev)}>
                            <div>
                                {
                                    isDrop? <CaretRightIcon/>: <ChevronDownIcon/>
                                    
                                }
                            </div> 
                            <div>Works</div>
                        </li>
                        {
                            isDrop? 
                             <div className='drop-down'>
                                <div className={`path-btn ${id === 'projects'? 'active' : null}`} onClick={projectBtn}><ChannelIcon/> 프로젝트</div>
                                <div className={`path-btn ${id === 'blog'? 'active' : null}`} onClick={blogBtn}><ChannelIcon/> 기술블로그</div>
                            </div>
                            :
                            null
                        }        
                    </ul>
                    <div className='resize' onMouseDown={startResize}></div>
                </nav>
                <div className='contents'>
                    {
                        id === 'welcome'? <WelcomePage/> 
                        : 
                        id === 'projects' ? <ProjectPage/> : <BlogPage/>
                    }
                </div>
            </div>
        </>
    );
}

export default MainPage;