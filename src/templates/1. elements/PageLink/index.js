import Link from 'next/link';
import styles from './PageLink.module.scss';

const PageLink = ({ data }) => {
  const { href, text, viewAllText = 'View all' } = data;

  return (
    <h3 className={styles['page-link']}>
      <Link href={href}>
        <a className={styles.link}>
          <div className={styles.title}>
            <span>{text}</span>
          </div>
          <div className={styles['view-all']}>
            <span>{viewAllText}</span>
          </div>
        </a>
      </Link>
    </h3>
  );
};

export default PageLink;
