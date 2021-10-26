import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import staticData from 'lib/static.json';
import styles from './BackToTop.module.scss';

const BackToTop = () => {
  const { backToTop } = staticData;
  const { text } = backToTop;

  return (
    <section className={`section ${styles['back-to-top']}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <button
            className={styles.button}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            type="button"
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faArrowAltCircleUp} />
            </div>
            <div className={styles.title}>{text}</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BackToTop;
