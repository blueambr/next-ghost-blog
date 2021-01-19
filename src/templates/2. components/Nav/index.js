import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav = ({ data }) => (
  <nav className={styles.nav}>
    {data.map((link) => (
      <Link href={link.url} key={link.url}>
        <a className={styles.link}>
          <span>{link.label}</span>
        </a>
      </Link>
    ))}
  </nav>
);

export default Nav;
