import Link from 'next/link';
import styles from './Logo.module.scss';

const Logo = ({ data }) => {
  const { href, text } = data;

  return (
    <div className={styles.logo}>
      <Link href={href}>
        <a className={styles.link}>{text}</a>
      </Link>
    </div>
  );
};

export default Logo;
