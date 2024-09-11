import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./command.module.css";
import React, { useEffect, useRef } from "react";

export interface CommandPageProps {
    open: boolean;
}

export const CommandPage: React.FC<CommandPageProps> = ({ open }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <>
            {open ? 
                <div className={styles.background}>
                <div className={styles.bar}>
                    <input ref={inputRef} className={styles.field} placeholder="Find a component..." spellCheck="false"></input>
                </div>
            </div>
            : null}
            
        </>
    );
}