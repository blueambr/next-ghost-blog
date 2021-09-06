import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Logo from '@/elements/Logo';
import Nav from '@/components/Nav';
import styles from './Header.module.scss';

const Trigger = ({ classname, icon, isHidden, setIsHidden, title }) => (
  <div className={`${styles.trigger} ${classname || ''}`}>
    <button
      className={styles.trigger__button}
      type="button"
      title={title}
      onClick={() => setIsHidden(!isHidden)}
    >
      <div className={styles['trigger__button-icon']}>
        <FontAwesomeIcon icon={icon} />
      </div>
    </button>
  </div>
);

const Header = ({ data }) => {
  const { title, navigation } = data;
  const trigger = {
    showTitle: 'Show the header',
    hideTitle: 'Hide the header',
  };

  const [isHidden, setIsHidden] = useState(false);

  return (
    <header className={`${styles.header} ${isHidden ? styles.header_hidden : ''}`}>
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
          {!isHidden ? (
            <Trigger
              icon={faEyeSlash}
              isHidden={isHidden}
              setIsHidden={setIsHidden}
              title={trigger.hideTitle}
            />
          ) : (
            <Trigger
              classname={styles.trigger_show}
              icon={faEye}
              isHidden={isHidden}
              setIsHidden={setIsHidden}
              title={trigger.showTitle}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
