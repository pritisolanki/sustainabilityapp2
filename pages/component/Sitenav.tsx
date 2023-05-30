import { WebSpotlightRoot } from '../../models/content-types/web_spotlight_root';
import styles from "../../styles/Home.module.css"
import Link from 'next/link';
import React from 'react'

export default function Sitenav({ navItems }: { navItems: WebSpotlightRoot | undefined }) {
    return (
        <nav className={styles.webnavigation}>
            <ul data-kontent-item-id={navItems?.system.id} data-kontent-element-codename="subpages" data-kontent-add-button data-kontent-add-button-render-position="bottom-start" data-kontent-add-button-insert-position="end">
                <li><Link href="/">Home</Link></li>
                {
                    navItems?.elements.subpages.linkedItems.map((item, index) => {
                        return (<li key={index}><div className={styles.lidiv} data-kontent-element-codename={item.system.codename}><Link href={item.elements.url.value}>{item.elements.title.value.toUpperCase()}</Link></div></li>)
                    })
                }
            </ul>
        </nav>
    )
}