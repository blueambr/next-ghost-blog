import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav = ({ data }) => (
  <nav className={styles.nav}>
    {data.map((link) => (
      <Link href={link.href} key={link.key}>
        <a className={styles.link}>{link.text}</a>
      </Link>
    ))}
  </nav>
);

export default Nav;
