import React from 'react';
import styles from "../assets/css/NavCard.module.css";
import { useNavigate } from 'react-router-dom';

function NavCard({ link, ref, href, backgroundColor, cardTitle, cardInfo, cardImg }) {
    const navigate = useNavigate();

    // 내부 링크 클릭 시
    const handleClick = () => {
        if (link) navigate(link);
        if (ref) ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // 외부 링크일 경우 <a> 래핑
    const Wrapper = href ? "a" : "div";

    return (
        <Wrapper
            className={styles.navCardContainer}
            onClick={href ? undefined : handleClick}
            href={href}
            target={href ? "_blank" : undefined}
            rel={href ? "noopener noreferrer" : undefined}
            style={{ backgroundColor }}
        >
            <h3 className={styles.navCardText}>{cardTitle}</h3>
            <p className={styles.navCardInfo}>{cardInfo}</p>
            <img src={cardImg} alt={cardImg} className={styles.navCardImg} />
        </Wrapper>
    );
}

export default NavCard;
