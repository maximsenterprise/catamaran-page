"use client";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport
  } from "~/components/ui/navigation-menu"

import styles from "./index.module.css";
import React, { useState } from "react";
import { CommandDialog, CommandInput } from "cmdk";
import { CommandPage } from "./command";

export function NavBar() {
    const [open, setOpen] = useState(false);
    
    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && e.metaKey) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        }

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    });

    const handleOpen = () => {
        setOpen(prevOpen => !prevOpen);
    }

    return (
        <>
        <CommandPage open={open}></CommandPage>
        <div className="flex justify-center">
        <div className={styles.navBar}>
            <a className={styles.catamaran} href="/">Catamaran</a>
            <button className={styles.search} onClick={handleOpen}>Search (&#8984;K)</button>
            <a className={styles.link} href="documentation">Documentation</a>
            <a className={styles.link} href="started">Getting Started</a>
        </div>
        </div>
        </>
    );
}

export function DocsBar() {
    const [open, setOpen] = useState(false);
    
    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && e.metaKey) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        }

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    });

    const handleOpen = () => {
        setOpen(prevOpen => !prevOpen);
    }

    return (
        <>
        <CommandPage open={open}></CommandPage>
        <div className="flex justify-center">
        <div className={styles.navBarDocs}>
            <a className={styles.catamaranDocs} href="/">Documentation</a>
            <button className={styles.search} onClick={handleOpen}>Search (&#8984;K)</button>
            <a className={styles.link} href="documentation">Catamaran API</a>
            <a className={styles.link} href="started">CoreWindows</a>
        </div>
        </div>
        </>
    )
}