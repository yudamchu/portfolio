import React, { useState, useEffect } from 'react';
import '../assets/css/MainPageStyle.css';
import {
  CaretRightIcon,
  ChevronDownIcon,
  ComposeIcon,
  SettingsIcon,
  ThreadsIcon,
  ChannelIcon
} from '../assets/Icons/MainPageIcons';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

function MainPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const historyStack = useRef([]);

  const [isResizing, setIsResizing] = useState(false);
  const [menuWidth, setMenuWidth] = useState(200);
  const [isDrop, setIsDrop] = useState(true); // 기본 open


  // 메뉴 데이터 구조화
  const menuData = [
    {
      id: 'welcome',
      label: 'Welcome',
      icon: <ThreadsIcon />,
      path: '/',
    },
    {
      id: 'works',
      label: 'Works',
      icon: isDrop ? <CaretRightIcon /> : <ChevronDownIcon />,
      children: [
        {
          id: 'projects',
          label: '프로젝트',
          icon: <ChannelIcon />,
          path: '/projects',
        },
        {
          id: 'blog',
          label: '기술블로그',
          icon: <ChannelIcon />,
          path: '/blog',
        },
      ],
    },
  ];

  // 현재 URL 기반 active 메뉴 자동 찾기
  const getActiveId = () => {
    const current = location.pathname;

    if (current === '/') return 'welcome';
    if (current.startsWith('/projects')) return 'projects';
    if (current.startsWith('/blog')) return 'blog';

    return '';

  };

  const activeId = getActiveId();


  //방문기록
   useEffect(() => {
    historyStack.current.push(location.pathname);
    console.log("방문 기록:", historyStack.current);
  }, [location.pathname]);

  // 리사이저 시작
  const startResize = () => {
    setIsResizing(true);
  };

  // 리사이저 실행
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResizing) {
        setMenuWidth(Math.min(400, Math.max(180, e.clientX)));
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

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
    <div className='main-container' style={{ gridTemplateColumns: `${menuWidth}px 1fr` }}>
      <nav className='menu-box'>
        
        {/* 상단 아이콘 영역 */}
        <div className='icon-box'>
          <div className='name-box'>Yudam</div>
          <div className='set-icons'>
            <div><SettingsIcon /></div>
            <div><ComposeIcon /></div>
          </div>
        </div>

        {/* 메뉴 */}
        <ul className='sub-menu'>
          {menuData.map((menu) =>
            !menu.children ? (
              // 일반 메뉴
              <li
                key={menu.id}
                className={`path-btn ${activeId === menu.id ? 'active' : ''}`}
                onClick={() => navigate(menu.path)}
              >
                <div>{menu.icon}</div>
                <div>{menu.label}</div>
              </li>
            ) : (
              // 드롭다운 메뉴
              <React.Fragment key={menu.id}>
                <li className='works' onClick={() => setIsDrop(prev => !prev)}>
                  <div>{menu.icon}</div>
                  <div>{menu.label}</div>
                </li>

                {isDrop && (
                  <div className='drop-down'>
                    {menu.children.map((child) => (
                      <div
                        key={child.id}
                        className={`path-btn ${activeId === child.id ? 'active' : ''}`}
                        onClick={() => navigate(child.path)}
                      >
                        {child.icon} {child.label}
                      </div>
                    ))}
                  </div>
                )}
              </React.Fragment>
            )
          )}
        </ul>

        {/* 리사이즈 바 */}
        <div className='resize' onMouseDown={startResize}></div>
      </nav>

      {/* 오른쪽 콘텐츠 */}
      <div className='contents'>
        <Outlet />
      </div>
    </div>
  );
}

export default MainPage;
