import styles from '../styles/Home.module.css'
import { getHeroUnit } from "../lib/kontentClient";
import { GetStaticProps, NextPage } from 'next';
import { IntroductionSection } from '../models/content-types/hero_introduction';

const Home: NextPage<IndexProps> = ({ heroUnit }: IndexProps) => {
  return (
    <main>
      <div className={styles.hero} data-kontent-item-id={heroUnit.system.id} data-kontent-element-codename={heroUnit.system.codename}>
        <div className={styles.summary}>
              This is second website, setup for testing
        </div> 
      </div>
    </main>
  )
}

export default Home

interface IndexProps {
  heroUnit: IntroductionSection
}


export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const heroUnit = await getHeroUnit();

  return {
    props: { heroUnit }
  };
}