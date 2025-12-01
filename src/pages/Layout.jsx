import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from '../assets/css/LayoutStyle.module.css';

import { 
  HomeIconOutline, HomeIconFilled,
  ContactIconOutline, ContactIconFilled,
  ProfileIconOutline, ProfileIconFilled,
  ProjectIconOutline, ProjectIconFilled,
  SettingIconOutline, SettingIconFilled,
  ArrowLeftIcon,
  ArrowRightIcon,
  HistoryIcon,
  SearchIcon
} from '../assets/Icons/HomeIcons';

function Layout() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  /** 아이콘에 class 추가하는 함수 */
  const renderIcon = (icon, cls) => {
    return React.cloneElement(icon, { className: cls });
  };

  const navItems = [
    { path: '/', label: '홈', icons: [HomeIconOutline, HomeIconFilled] },
    { path: '/contact', label: '연락처', icons: [ContactIconOutline, ContactIconFilled] },
    { path: '/profile', label: '프로필', icons: [ProfileIconOutline, ProfileIconFilled] },
    { path: '/projects', label: '프로젝트', icons: [ProjectIconOutline, ProjectIconFilled] },
    { path: '/setting', label: '세팅', icons: [SettingIconOutline, SettingIconFilled] },
  ];

  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <div className={styles.navBox}>
          {renderIcon(<ArrowLeftIcon />, styles.headerIcon)}
          {renderIcon(<ArrowRightIcon />, styles.headerIcon)}
          {renderIcon(<HistoryIcon />, styles.headerIcon)}
        </div>

        <div className={styles.searchBox}>
          {renderIcon(<SearchIcon />, styles.searchIcon)}
          <input type="text" placeholder="검색" />
        </div>
      </header>

      <div className={styles.body}>
        <nav className={styles.homeNav}>
          <div className={styles.myIcon}>Y</div>

          {navItems.map(({ path, label, icons }, idx) => {
            const isActive = location.pathname === path;
            const currentIcon = isActive || hovered === idx ? icons[1] : icons[0];

            return (
              <div
                key={path}
                className={styles.buttonHome}
                onClick={() => navigate(path)}
              >
                <div
                  className={`${styles.homeBtn} ${isActive ? styles.homeBtnActive : ''}`}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className={styles.btnIcon}>
                    {renderIcon(currentIcon, styles.headerIcon)}
                  </div>
                </div>
                <div className={styles.btnLabel}>{label}</div>
              </div>
            );
          })}
        </nav>

        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
