import styles from '../../styles/Home.module.css'
import { getPageDetails } from "../../lib/kontentClient";
import { GetStaticProps, NextPage } from 'next';
import { Page } from '../../models/content-types/page'

const Page: NextPage<IndexProps> = (Page) => {
  console.log(Page)
  const details = Page.pageDtl[0]?.elements.content.linkedItems.map((item, id) => {
      return (
        <div className={styles.habitItemcontainer} key={id}>
          <img src={item.elements.showcaseImage && item.elements.showcaseImage.value[0].url} className={styles.habitImg} width="100" height="100" data-kontent-element-codename={item.system.codename}/>
          <div className={styles.habitdtl}>
            <h2 className={styles.headlineh2} data-kontent-element-codename={item.system.codename}>{item.elements.headline.value}</h2>
            <div className={styles.habitdescription}  data-kontent-element-codename={item.system.codename}>{item.elements.description.value}</div>
          </div>
        </div>
      )
  });

  return (
    <main >
      <div className={styles.hero}>
        <h2 className={styles.headline}>{Page.pageDtl[0]?.elements.title.value.toUpperCase()}</h2>
        <div className={styles.habitcontainer} data-kontent-item-id={Page.pageDtl[0]?.system.id} data-kontent-element-codename="content" data-kontent-add-button data-kontent-add-button-render-position="bottom-start" data-kontent-add-button-insert-position="start">
          <div>{details}</div>
        </div>
      </div>
    </main>
  )
}

export default Page;

interface IndexProps {
  pageDtl: Page[];
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking" // false or 'blocking'
  };
}

export const getStaticProps: GetStaticProps<IndexProps> = async ({ params }) => {
  const pageDtl = await getPageDetails(params);
  return {
    props: { pageDtl }
  };
}