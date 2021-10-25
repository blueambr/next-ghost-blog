import { useContext, useEffect, useRef } from 'react';
import Image from 'next/image';
import SidebarVisibilityContext from 'contexts/SidebarVisibility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Logo from '@/elements/Logo';
import Nav from '@/components/Nav';
import RichText from '@/components/RichText';
import Socials from '@/components/Socials';
import styles from './Header.module.scss';

const Trigger = ({ classname, icon, title }) => {
  const [isSidebarHidden, setIsSidebarHidden] = useContext(SidebarVisibilityContext);

  return (
    <div
      className={`${styles.trigger} ${classname || ''} ${
        isSidebarHidden ? styles['trigger_hidden-sidebar'] : ''
      }`}
    >
      <button
        className={`${styles.trigger__button} ${
          classname === styles.trigger_show ? styles.trigger__button_show : ''
        }`}
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

const Header = ({ data, about }) => {
  const { title, navigation } = data;
  const socials = [
    {
      id: 'githubId',
      href: 'https://github.com/hotepp',
      icon: 'github',
      title: 'GitHub',
    },
    {
      id: 'linkedinId',
      href: 'https://www.linkedin.com/in/hotepp/',
      icon: 'linkedin',
      title: 'LinkedIn',
    },
    {
      id: 'telegramId',
      href: 'https://t.me/iamhotepp',
      icon: 'telegram',
      title: 'Telegram',
    },
  ];
  const trigger = {
    titleShow: 'Show the header',
    titleHide: 'Hide the header',
  };

  const [isSidebarHidden, setIsSidebarHidden] = useContext(SidebarVisibilityContext);

  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const links = [...header.getElementsByTagName('a')];
    const buttons = [...header.getElementsByTagName('button')];

    const hideSidebarOnTab = (e) => {
      if (e.keyCode === 9) {
        setIsSidebarHidden(true);
      }
    };

    const showSidebarOnFocus = (e) => {
      if (!e.target.classList.contains(styles.trigger__button_show)) {
        setIsSidebarHidden(false);
      }
    };

    links.map((link) => {
      link.addEventListener('focus', showSidebarOnFocus);
      link.addEventListener('keydown', hideSidebarOnTab);
    });

    buttons.map((button) => {
      button.addEventListener('focus', showSidebarOnFocus);
      button.addEventListener('keydown', hideSidebarOnTab);
    });
  }, [headerRef, setIsSidebarHidden]);

  return (
    <header
      className={`section ${styles.header} ${isSidebarHidden ? styles.header_hidden : ''}`}
      ref={headerRef}
    >
      <div className="container">
        <div className={styles.wrapper}>
          <button
            className={`${styles.dimmer} ${isSidebarHidden ? styles.dimmer_hidden : ''}`}
            type="button"
            title={trigger.titleHide}
            onClick={() => setIsSidebarHidden(true)}
          />
          <div className={styles.content}>
            <div className={styles.logo}>
              <Logo data={title} />
            </div>
            <div className={styles.nav}>
              <Nav data={navigation} />
            </div>
            <div className={styles.about}>
              <RichText data={about} isSmall />
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.socials}>
              <Socials list={socials} />
            </div>
            <div className={styles.powered}>
              <a
                className={styles.powered__link}
                href="https://www.digitalocean.com/?refcode=a1995348068b&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"
                title="Powered by DigitalOcean"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className={styles.powered__img}
                  src="/do.svg"
                  alt="DigitalOcean Referral Badge"
                  width={125}
                  height={40}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                />
              </a>
            </div>
            <div className={styles.triggers}>
              <Trigger
                icon={faEyeSlash}
                isSidebarHidden={isSidebarHidden}
                setIsSidebarHidden={setIsSidebarHidden}
                title={trigger.titleHide}
              />
              <Trigger
                classname={styles.trigger_show}
                icon={faEye}
                isSidebarHidden={isSidebarHidden}
                setIsSidebarHidden={setIsSidebarHidden}
                title={trigger.titleShow}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
