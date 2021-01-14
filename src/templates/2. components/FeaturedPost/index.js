import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturedPost.module.scss';

const FeaturedPost = ({ data }) => {
  const { href, title, image, tags } = data;

  return (
    <article className={styles.article}>
      <div className={styles.cover}>
        <Link href={href}>
          <a className={styles.pic}>
            <Image
              src={image.src}
              alt={image.alt}
              width={100}
              height={50}
              layout="responsive"
            />
          </a>
        </Link>
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li className={styles.tag} key={tag.key}>
              <Link href={tag.href}>
                <a className={styles.tag__link}>{tag.text}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <h2 className={styles.title}>
        <Link href={href}>
          <a className={styles.title__link}>{title}</a>
        </Link>
      </h2>
    </article>
  );
};

export default FeaturedPost;
