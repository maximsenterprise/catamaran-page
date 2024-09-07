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

export function navBar() {
    return (
        <div className="flex justify-center">
        <div className={styles.navBar}>
            <a className={styles.catamaran} href="/">Catamaran</a>
            <a className={styles.link}>About</a>
            <a className={styles.link}>Documentation</a>
            <a className={styles.link} href="started">Getting Started</a>
        </div>
        </div>
    );
}