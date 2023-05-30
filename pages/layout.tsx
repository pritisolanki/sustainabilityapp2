import React, { ReactNode } from 'react';
import Sitenav from "./component/Sitenav";
import { getNavigationData } from "../lib/kontentClient"
import { WebSpotlightRoot } from '../models/content-types/web_spotlight_root';
import { useEffect, useState } from 'react';
import styles from "../styles/Home.module.css"

interface IProps { children: React.ReactNode }

const RootLayout: React.FC<IProps> = ({ children }: IProps) => {
  const [navItems, setNavItems] = useState<WebSpotlightRoot>()
  useEffect(() => {
    const getNavItems = async () => {
      const nav = await getNavigationData();
      setNavItems(nav)
    }
    getNavItems()
  }, [])
  return (
    <section className={styles.mainContainer} >
      <Sitenav navItems={navItems} />
      {children}
    </section>
  )
}
export default RootLayout;