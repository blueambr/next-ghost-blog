import FeaturedPost from '@/components/FeaturedPost';
import styles from './Featured.module.scss';

const Featured = ({ data }) => (
  <section className={styles.featured}>
    <div className="container">
      <div className={styles.wrapper}>
        {data.map((post) => (
          <div className={styles.col}>
            <FeaturedPost data={post} key={post.key} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Featured;
