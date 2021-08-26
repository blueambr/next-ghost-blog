import { useEffect, useRef } from 'react';
import 'lazysizes';
import reframe from 'reframe.js';
import styles from './RichText.module.scss';

const RichText = ({ data }) => {
  const rte = useRef(null);

  useEffect(() => {
    if (rte.current) {
      /**
       * Lazyload RTE images.
       * Unfortunately, I couldn't find a way to use next/image for them.
       */
      const images = [...rte.current.getElementsByTagName('img')];

      images.map((img) => {
        const { src } = img;

        img.setAttribute('src', 'null');
        img.setAttribute('data-src', src);
        img.classList.add('lazyload');
      });

      /**
       * Make iframes scale with the viewport.
       * Can be used for different elements, not only iframes.
       */
      reframe('.kg-embed-card iframe');
    }
  }, [rte]);

  return (
    <div
      className={styles['rich-text']}
      dangerouslySetInnerHTML={{ __html: data }}
      ref={rte}
    />
  );
};

export default RichText;
