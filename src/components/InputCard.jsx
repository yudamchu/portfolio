import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";

function InputCard({inputArr, setInputArr}) {
    const [input, setInput] = useState("");


    const handleInput = (e) => {
        e.preventDefault();

        // 빈 문자열 추가 방지
        if (!input.trim()) return;

        // 새로운 배열로 상태 업데이트
        setInputArr(prev => [...prev, input]);

        // 입력창 초기화
        setInput("");
    };

    console.log("inputArr", inputArr);
    console.log("input", input);

    return (
        <form className='inputForm' onSubmit={handleInput}>
          <input 
            type='text' 
            value={input}
            onChange={(e) => setInput(e.target.value)}
          /> 
          <button type='submit'>
            <IoMdSend/>
          </button> 
        </form>
    );
}

export default InputCard;
