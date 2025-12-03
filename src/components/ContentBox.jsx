import React, { useRef, useEffect, useState } from 'react';
import styles from '../assets/css/ContentBox.module.css';

function ContentBox({ children }) {
    const scrollRef = useRef(null);
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        const scrollEl = scrollRef.current;
        if (!scrollEl) return;

        if (isFirstRender) {
            // 처음 렌더링 → 맨 위로 이동
            scrollEl.scrollTop = 0;
            setIsFirstRender(false);
        } else {
            // 그 이후(children 변화) → 맨 아래로 이동
            scrollEl.scrollTop = scrollEl.scrollHeight;
        }
    }, [children]);

    return (
        <div className={styles.scroll} ref={scrollRef}>
            <div className={styles.backgroundLayer}/>
            <div className={styles.contentBox}>
                {children}
            </div>
        </div>
    );
}

export default ContentBox;
