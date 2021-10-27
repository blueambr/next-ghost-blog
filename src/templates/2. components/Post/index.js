import Image from 'next/image';
import Link from 'next/link';
import c from 'clsx';
import Tags from '@/elements/Tags';
import styles from './Post.module.scss';

const Post = ({ data }) => {
  const { slug, title, feature_image, tags, excerpt } = data;

  return (
    <article className={styles.article}>
      <div className={styles.wrapper}>
        {feature_image && (
          <div className={c('block-sm', 'block-mobile', styles.cover)}>
            <Link href={`/${slug}`}>
              <a className={styles.pic} aria-label="Go to the post">
                <Image
                  src={feature_image}
                  alt="Representative image"
                  width={100}
                  height={70}
                  layout="responsive"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                />
              </a>
            </Link>
          </div>
        )}
        <div className={styles.content}>
          <h2 className={c('block-xs', styles.title)}>
            <Link href={`/${slug}`}>
              <a className={styles.title__link}>
                <span>{title}</span>
              </a>
            </Link>
          </h2>
          <div className={c('block-xs', styles.additional)}>
            <div className={c('block-xs', styles.tags)}>
              <Tags tags={tags} />
            </div>
            <div className={c('block-xs', styles.excerpt)}>
              <p>{excerpt}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
