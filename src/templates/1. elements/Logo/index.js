import Link from 'next/link';
import styles from './Logo.module.scss';

const Logo = ({ data }) => (
  <div className={styles.logo}>
    <Link href="/">
      <a className={styles.link}>
        <span>{data}</span>
      </a>
    </Link>
  </div>
);

export default Logo;
