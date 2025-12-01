import React, { useState, useEffect, useRef } from 'react';
import styles from '../assets/css/MainPageStyle.module.css';

import {
  CaretRightIcon,
  ChevronDownIcon,
  ComposeIcon,
  SettingsIcon,
  ThreadsIcon,
  ChannelIcon
} from '../assets/Icons/MainPageIcons';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const historyStack = useRef([]);

  const [isResizing, setIsResizing] = useState(false);
  const [menuWidth, setMenuWidth] = useState(200);
  const [isDrop, setIsDrop] = useState(true);

  /** SVG 아이콘 클래스 자동 적용 함수 */
  const renderIcon = (icon) => {
    return React.cloneElement(icon, { className: styles.sidebarIcon });
  };

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

  const getActiveId = () => {
    const current = location.pathname;

    if (current === '/') return 'welcome';
    if (current.startsWith('/projects')) return 'projects';
    if (current.startsWith('/blog')) return 'blog';

    return '';
  };

  const activeId = getActiveId();

  useEffect(() => {
    historyStack.current.push(location.pathname);
    console.log("방문 기록:", historyStack.current);
  }, [location.pathname]);

  const startResize = () => {
    setIsResizing(true);
  };

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
    <div className={styles.mainContainer} style={{ gridTemplateColumns: `${menuWidth}px 1fr` }}>
      <nav className={styles.menuBox}>
        
        {/* 상단 */}
        <div className={styles.iconBox}>
          <div className={styles.nameBox}>Yudam</div>
          <div className={styles.setIcons}>
            <div>{renderIcon(<SettingsIcon />)}</div>
            <div>{renderIcon(<ComposeIcon />)}</div>
          </div>
        </div>

        {/* 메뉴 */}
        <ul className={styles.subMenu}>
          {menuData.map((menu) =>
            !menu.children ? (
              <li
                key={menu.id}
                className={`${styles.pathBtn} ${activeId === menu.id ? styles.active : ''}`}
                onClick={() => navigate(menu.path)}
              >
                <div>{renderIcon(menu.icon)}</div>
                <div>{menu.label}</div>
              </li>
            ) : (
              <React.Fragment key={menu.id}>
                <li className={styles.works} onClick={() => setIsDrop(prev => !prev)}>
                  <div>{renderIcon(menu.icon)}</div>
                  <div>{menu.label}</div>
                </li>

                {isDrop && (
                  <div className={styles.dropDown}>
                    {menu.children.map((child) => (
                      <div
                        key={child.id}
                        className={`${styles.pathBtn} ${activeId === child.id ? styles.active : ''}`}
                        onClick={() => navigate(child.path)}
                      >
                        {renderIcon(child.icon)} {child.label}
                      </div>
                    ))}
                  </div>
                )}
              </React.Fragment>
            )
          )}
        </ul>

        {/* 리사이즈 바 */}
        <div className={styles.resize} onMouseDown={startResize}></div>
      </nav>

      <div className={styles.contents}>
        <Outlet />
      </div>
    </div>
  );
}

export default MainPage;
