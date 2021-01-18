import Link from 'next/link';
import styles from './PageLink.module.scss';

const PageLink = ({ data }) => {
  const { href, text, viewAllText = 'View all' } = data;

  return (
    <h3 className={styles['page-link']}>
      <Link href={href}>
        <a className={styles.link}>
          <div className={styles.title}>
            <div className={styles.layer} />
            <span>{text}</span>
          </div>
          <div className={styles['view-all']}>
            <div className={styles.layer} />
            <span>{viewAllText}</span>
          </div>
        </a>
      </Link>
    </h3>
  );
};

export default PageLink;
