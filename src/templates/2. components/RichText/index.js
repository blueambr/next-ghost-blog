import { useEffect } from 'react';
import reframe from 'reframe.js';
import styles from './RichText.module.scss';

const RichText = ({ data }) => {
  useEffect(() => {
    reframe('.kg-embed-card iframe');
  }, []);

  return (
    <div
      className={styles['rich-text']}
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
};

export default RichText;
