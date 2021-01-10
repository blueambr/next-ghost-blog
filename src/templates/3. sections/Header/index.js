import Logo from '@/elements/Logo';
import Nav from '@/components/Nav';
import styles from './Header.module.scss';

const Header = ({ data }) => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Logo data={data.logo} />
        </div>
        <div className={styles.nav}>
          <Nav data={data.nav} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
