import { useEffect, useState } from "react";
import './Text.css';

export default function Text({keyUp}) {

    const pressKey = (e) => {
        const code = e.target.value;
        if(code.length > 1) {
            keyUp(e.target.value);
        }
    }

    return <>
        <input 
            type="text" 
            className="
                block 
                w-full 
                p-4 
                ps-10 
                text-sm 
                text-black 
                border 
                rounded-lg 
                focus:ring-blue-500 
                focus:border-blue-500 
                dark:border-gray-600 
                dark:placeholder-gray-400 
                dark:focus:ring-blue-500 
                dark:focus:border-blue-500
            " 
            onKeyUp={pressKey}
        />
    </>
}