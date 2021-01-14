import Link from 'next/link';
import styles from './PageLink.module.scss';

const PageLink = ({ data }) => {
  const { href, text, viewAllText = 'View all' } = data;

  return (
    <h3 className={styles['page-link']}>
      <Link href={href}>
        <a className={styles.link}>
          <span className={styles.title}>{text}</span>
          <span className={styles['view-all']}>{viewAllText}</span>
        </a>
      </Link>
    </h3>
  );
};

export default PageLink;
