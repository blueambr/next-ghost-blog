import PageLink from '@/elements/PageLink';
import Post from '@/components/Post';
import styles from './Posts.module.scss';

const Posts = ({ pageLink, posts }) => (
  <section className={styles.posts}>
    <div className="container">
      <div className={styles.wrapper}>
        {pageLink && (
          <div className={styles['page-link']}>
            <PageLink data={pageLink} />
          </div>
        )}
        <div className={styles.content}>
          <ul className={styles.row}>
            {posts.map((post) => (
              <li className={styles.col} key={post.uuid}>
                <Post data={post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Posts;
