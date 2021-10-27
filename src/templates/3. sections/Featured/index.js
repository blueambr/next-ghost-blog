import c from 'clsx';
import PageLink from '@/elements/PageLink';
import FeaturedPost from '@/components/FeaturedPost';
import styles from './Featured.module.scss';

const Featured = ({ posts }) => {
  const pageLink = { href: '/featured', text: 'Featured' };

  return (
    <section className={c('section', styles.featured)}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={c('block', styles['page-link'])}>
            <PageLink data={pageLink} />
          </div>
          <div className={c('block', styles.content)}>
            <ul className={styles.row}>
              {posts.map((post) => (
                <li className={styles.col} key={post.id}>
                  <FeaturedPost data={post} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
