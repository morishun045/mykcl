import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { Navigation } from "./navigation"
import { Registration } from "./registration";

type HeaderProps = {
    title: string;
}
export function Header({title}: HeaderProps){
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <nav>
                <ul>
                    <li>
                        <div className={styles.headernav}>
                            <Navigation navilink="/" title="home"/>
                            <Navigation navilink="/first" title="1階"/>
                            <Navigation navilink="/second" title="2階"/>
                            <Navigation navilink="/third" title="3階"/>
                            <Navigation navilink="/forth" title="4階"/>
                            <Navigation navilink="/other" title="その他施設"/>
                        </div>
                        <div>
                            <Registration />
                        </div>
                    </li>
                </ul>
            </nav>
        </header>

    )
}