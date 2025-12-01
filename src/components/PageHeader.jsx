import React from 'react';
import { MdOutlineHeadset } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BellIcon, SearchIcon } from '../assets/Icons/HomeIcons';
import { BsPersonPlus } from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import styles from '../assets/css/PageHeader.module.css';

function PageHeader({ pageName }) {
    return (
        <div className={styles.pageHeaderContainer}>
            <p className={styles.pageName}><HiOutlineHashtag className={styles.hashTag}/>{pageName}</p>

            <div className={styles.btnsBox}>
                <div className={styles.inviteBtn}><BsPersonPlus className={styles.personIcon}/>팀원 초대하기</div>
                <div className={styles.headerBtn}>
                    <MdOutlineHeadset className={styles.headerIcon} />
                </div>
                <div className={styles.headerBtn}>
                    <BellIcon className={styles.headerIcon} />
                </div>
                <div className={styles.headerBtn}>
                    <SearchIcon className={styles.headerIcon} />
                </div>
                <div className={styles.dotBtn}>
                    <HiOutlineDotsVertical className={styles.headerIcon} />
                </div>
            </div>
        </div>
    );
}

export default PageHeader;
