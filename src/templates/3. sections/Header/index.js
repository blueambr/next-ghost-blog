import Logo from '@/elements/Logo';
import Nav from '@/components/Nav';
import styles from './Header.module.scss';

const Header = ({ data }) => {
  const { title, navigation } = data;

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Logo data={title} />
          </div>
          <div className={styles.nav}>
            <Nav data={navigation} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
