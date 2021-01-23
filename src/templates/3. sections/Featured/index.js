import PageLink from '@/elements/PageLink';
import FeaturedPost from '@/components/FeaturedPost';
import styles from './Featured.module.scss';

const Featured = ({ posts }) => {
  const pageLink = { href: '/featured', text: 'Featured' };

  return (
    <section className={styles.featured}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles['page-link']}>
            <PageLink data={pageLink} />
          </div>
          <div className={styles.content}>
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
