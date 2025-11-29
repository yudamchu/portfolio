import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import '../assets/css/HomeStyle.css';
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

  const navItems = [
    { path: '/', label: '홈', icons: [HomeIconOutline, HomeIconFilled] },
    { path: 'contact', label: '연락처', icons: [ContactIconOutline, ContactIconFilled] },
    { path: 'profile', label: '프로필', icons: [ProfileIconOutline, ProfileIconFilled] },
    { path: 'projects', label: '프로젝트', icons: [ProjectIconOutline, ProjectIconFilled] },
    { path: 'setting', label: '세팅', icons: [SettingIconOutline, SettingIconFilled] },
  ];

  return (
    <div className="home-container">
      <header className="header">
        <div className='nav-box'>
          <ArrowLeftIcon/>
          <ArrowRightIcon/>
          <HistoryIcon/>
        </div>
        <div className='search-box'>
          <SearchIcon/>
          <input type='text' placeholder='검색'/>
        </div>
      </header>
      <div className="body">
        <nav className="home-nav">
          <div className="my-icon">Y</div>
          {navItems.map(({ path, label, icons }, idx) => {

            const isActive = location.pathname === path;
            return (
            <div
              key={path}
              className="button-home"
              onClick={() => navigate(path)}
            >
              <div className={`home-btn ${isActive? "active": ""}`}
               onMouseEnter={() => setHovered(idx)}
               onMouseLeave={() => setHovered(null)}
              >
                <div className="btn-icon">
                  {
                   isActive || (hovered === idx) ? icons[1] : icons[0]
                  }
                </div>
              </div>
              <div className="btn-label">{label}</div>
            </div> 
            )
          })}
        </nav>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
