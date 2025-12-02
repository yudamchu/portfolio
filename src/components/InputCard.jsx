import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { FiBold, FiItalic, FiUnderline, FiLink, FiList, FiCode } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import styles from '../assets/css/InputCard.module.css';

function InputCard({ inputArr, setInputArr }) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setInputArr((prev) => [...prev, input]);
    setInput("");
  };

  return (
    <form className={styles.inputForm} onSubmit={handleInput}>
      {/* --- 툴바 영역 --- */}
      <div className={styles.toolbar}>
        <button type="button"><FiBold /></button>
        <button type="button"><FiItalic /></button>
        <button type="button"><FiUnderline /></button>
        <button type="button"><FiLink /></button>
        <button type="button"><FiList /></button>
        <button type="button"><FiCode /></button>
      </div>

      {/* --- 입력창 영역 --- */}
      <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="내용을 입력해주세요."
          className={styles.textArea}
        />

      {/* --- 전송 --- */}
      <div className={styles.submitBtnWrapper}>
        <div className={styles.inputArea}>
            <button type="button" className={styles.leftIcon}>
                <AiOutlinePlus />
            </button>
            <div className={styles.rightIcons}>
                <BsEmojiSmile />
            </div>
        </div>
        <button type="submit" className={styles.sendBtn}>
          <IoMdSend />
        </button>
      </div>
    </form>
  );
}

export default InputCard;
