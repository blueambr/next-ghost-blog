import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturedPost.module.scss';

const FeaturedPost = ({ data }) => {
  const { slug, title, feature_image, tags } = data;

  return (
    <article className={styles.article}>
      <div className={styles.cover}>
        <Link href={`/${slug}`}>
          <a className={styles.pic}>
            <Image
              src={feature_image}
              alt="Alt"
              width={100}
              height={50}
              layout="responsive"
            />
          </a>
        </Link>
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li className={styles.tag} key={tag.id}>
              <Link href={`/${tag.slug}`}>
                <a className={styles.tag__link}>{tag.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <h2 className={styles.title}>
        <Link href={`/${slug}`}>
          <a className={styles.title__link}>{title}</a>
        </Link>
      </h2>
    </article>
  );
};

export default FeaturedPost;
