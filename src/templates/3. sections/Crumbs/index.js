import Breadcrumbs from 'nextjs-breadcrumbs';
import staticData from 'lib/static.json';
import styles from './Breadcrumbs.module.scss';

const Crumbs = () => {
  const { breadcrumbs } = staticData;
  const { home } = breadcrumbs;

  return (
    <section className={`${styles.breadcrumbs} section`}>
      <div className="container">
        <div className={styles.wrapper}>
          <Breadcrumbs
            rootLabel={home}
            containerClassName={`breadcrumb ${styles.nav} has-arrow-separator is-medium`}
            listClassName={`${styles.list}`}
            activeItemClassName={`${styles.item} is-active`}
            inactiveItemClassName={`${styles.item}`}
            omitIndexList={[2]}
            replaceCharacterList={[
              { from: '.', to: ' ' },
              { from: '-', to: ' ' },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Crumbs;
