import { useContext } from 'react';
import SidebarVisibilityContext from 'contexts/SidebarVisibility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Logo from '@/elements/Logo';
import Nav from '@/components/Nav';
import styles from './Header.module.scss';

const Trigger = ({ classname, icon, title }) => {
  const [isSidebarHidden, setIsSidebarHidden] = useContext(SidebarVisibilityContext);

  return (
    <div
      className={`${styles.trigger} ${classname || ''} ${
        isSidebarHidden ? styles.trigger_hidden : ''
      }`}
    >
      <button
        className={styles.trigger__button}
        type="button"
        title={title}
        onClick={() => setIsSidebarHidden(!isSidebarHidden)}
      >
        <div className={styles['trigger__button-icon']}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </button>
    </div>
  );
};

const Header = ({ data }) => {
  const { title, navigation } = data;
  const trigger = {
    showTitle: 'Show the header',
    hideTitle: 'Hide the header',
  };

  const [isSidebarHidden, setIsSidebarHidden] = useContext(SidebarVisibilityContext);

  return (
    <header className={`${styles.header} ${isSidebarHidden ? styles.header_hidden : ''}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.logo}>
              <Logo data={title} />
            </div>
            <div className={styles.nav}>
              <Nav data={navigation} />
            </div>
          </div>
          <Trigger
            icon={faEyeSlash}
            isSidebarHidden={isSidebarHidden}
            setIsSidebarHidden={setIsSidebarHidden}
            title={trigger.hideTitle}
          />
          <Trigger
            classname={styles.trigger_show}
            icon={faEye}
            isSidebarHidden={isSidebarHidden}
            setIsSidebarHidden={setIsSidebarHidden}
            title={trigger.showTitle}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
