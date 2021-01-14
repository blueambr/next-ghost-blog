import FeaturedPost from '@/components/FeaturedPost';
import styles from './Featured.module.scss';

const Featured = ({ data }) => (
  <section className={styles.featured}>
    <div className="container">
      <ul className={styles.row}>
        {data.map((post) => (
          <li className={styles.col} key={post.key}>
            <FeaturedPost data={post} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Featured;
