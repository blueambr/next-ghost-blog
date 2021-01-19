import Image from 'next/image';
import Link from 'next/link';
import styles from './Post.module.scss';

const Post = ({ data }) => {
  const { slug, title, feature_image, tags, excerpt } = data;

  return (
    <article className={styles.article}>
      <div className={styles.wrapper}>
        <div className={styles.cover}>
          <Link href={`/${slug}`}>
            <a className={styles.pic}>
              <Image
                src={feature_image}
                alt="Alt"
                width={100}
                height={70}
                layout="responsive"
              />
            </a>
          </Link>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <Link href={`/${slug}`}>
              <a className={styles.title__link}>
                <span>{title}</span>
              </a>
            </Link>
          </h2>
          <div className={styles.additional}>
            <ul className={styles.tags}>
              {tags.map((tag) => (
                <li className={styles.tag} key={tag.id}>
                  <Link href={`/${tag.slug}`}>
                    {tag.accent_color ? (
                      <a
                        className={styles.tag__link}
                        style={{ color: tag.accent_color }}
                      >
                        {tag.name}
                      </a>
                    ) : (
                      <a className={styles.tag__link}>{tag.name}</a>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.excerpt}>
              <p>{excerpt}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
