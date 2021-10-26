import PageLink from '@/elements/PageLink';
import Post from '@/components/Post';
import Pagination from '@/components/Pagination';
import styles from './Posts.module.scss';

const Posts = ({ pageLink, posts, pagination, paginationRoot }) => (
  <section className={`section ${styles.posts}`}>
    <div className="container">
      <div className={styles.wrapper}>
        {pageLink && (
          <div className={`block ${styles['page-link']}`}>
            <PageLink data={pageLink} />
          </div>
        )}
        <div className={`block ${styles.content}`}>
          <ul className={styles.row}>
            {posts.map((post) => (
              <li className={`block-md ${styles.col}`} key={post.id}>
                <Post data={post} />
              </li>
            ))}
          </ul>
        </div>
        {pagination && (
          <div className={`block ${styles.pagination}`}>
            <Pagination data={pagination} root={paginationRoot} />
          </div>
        )}
      </div>
    </div>
  </section>
);

export default Posts;
