import Image from 'next/image';
import styles from './FeaturedPost.module.scss';

const FeaturedPost = ({ data }) => {
  const { title, image } = data;

  return (
    <article className={styles.article}>
      <div className={styles.cover}>
        <Image
          src={image.src}
          alt={image.alt}
          width={100}
          height={50}
          layout="responsive"
        />
      </div>
      <h2 className={styles.title}>{title}</h2>
    </article>
  );
};

export default FeaturedPost;
