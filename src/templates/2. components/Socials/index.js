import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import styles from './Socials.module.scss';

const Socials = ({ list }) => {
  const determineIcon = (icon) => {
    if (icon === 'github') {
      return faGithub;
    }

    if (icon === 'linkedin') {
      return faLinkedin;
    }

    if (icon === 'telegram') {
      return faTelegram;
    }

    return null;
  };

  return (
    <div className={styles.socials}>
      <ul className={styles.list}>
        {list.map((item) => (
          <li className={styles.item} key={item.id}>
            <a
              href={item.href}
              className={styles.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.icon}>
                <FontAwesomeIcon icon={determineIcon(item.icon)} />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
