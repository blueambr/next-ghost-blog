import Image from 'next/image';
import Link from 'next/link';
import c from 'clsx';
import styles from './FeaturedPost.module.scss';

const FeaturedPost = ({ data }) => {
  const { slug, title, feature_image, tags } = data;

  return (
    <article className={styles.article}>
      <div className={c('block-sm', styles.cover)}>
        <Link href={`/${slug}`}>
          <a className={styles.pic} aria-label="Go to the post">
            <Image
              src={feature_image}
              alt="Representative image"
              width={100}
              height={60}
              layout="responsive"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            />
          </a>
        </Link>
        <ul className={styles.tags}>
          {tags.map((tag) => (
            <li className={styles.tag} key={tag.id}>
              <Link href={`/tag/${tag.slug}`}>
                {tag.accent_color ? (
                  <a className={styles.tag__link} style={{ backgroundColor: tag.accent_color }}>
                    {tag.name}
                  </a>
                ) : (
                  <a className={styles.tag__link}>{tag.name}</a>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <h2 className={c('block', styles.title)}>
        <Link href={`/${slug}`}>
          <a className={styles.title__link}>
            <span>{title}</span>
          </a>
        </Link>
      </h2>
    </article>
  );
};

export default FeaturedPost;
