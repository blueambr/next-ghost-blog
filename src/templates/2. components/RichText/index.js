import { useEffect, useRef } from 'react';
import 'lazysizes';
import reframe from 'reframe.js';
import styles from './RichText.module.scss';

const RichText = ({ data, isSmall }) => {
  const rte = useRef(null);

  useEffect(() => {
    if (rte.current) {
      /**
       * Lazyload RTE images.
       * Make the lazyload canvas the same width and height as the resulted image.
       * Fill the canvas with a transparent Base64 until the original image is loaded.
       * Unfortunately, I couldn't find a way to use next/image for them.
       */
      const { offsetWidth } = rte.current;
      const images = [...rte.current.getElementsByTagName('img')];

      images.map((img) => {
        const { src, width, height } = img;

        img.setAttribute(
          'src',
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
        );
        img.setAttribute('width', offsetWidth);
        img.setAttribute('height', offsetWidth * (width / height));
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
      className={`${styles['rich-text']} ${isSmall ? styles['rich-text_small'] : ''}`}
      dangerouslySetInnerHTML={{ __html: data }}
      ref={rte}
    />
  );
};

export default RichText;
