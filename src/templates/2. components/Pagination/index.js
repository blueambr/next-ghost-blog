import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Pagination.module.scss';

const Pagination = ({ data, root }) => {
  const { page, pages, prev, next } = data;

  return (
    <div className={styles.pagination}>
      <ul className={styles.list}>
        <li className={styles.item}>
          {prev ? (
            <Link href={`/${root}/${prev}`}>
              <a className={styles.link}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </div>
              </a>
            </Link>
          ) : (
            <div className={`${styles.link} ${styles.disabled}`}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
            </div>
          )}
        </li>
        <li className={styles.item}>
          {next ? (
            <Link href={`/${root}/${next}`}>
              <a className={styles.link}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </a>
            </Link>
          ) : (
            <div className={`${styles.link} ${styles.disabled}`}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
