import Image from 'next/image';
import { format } from 'date-fns';
import Tags from '@/elements/Tags';
import styles from './DedicatedPost.module.scss';

const DedicatedPost = ({ data }) => {
  const {
    authors,
    excerpt,
    feature_image,
    reading_time,
    tags,
    title,
    updated_at,
  } = data;

  const author = authors[0];

  return (
    <section className={styles.post}>
      <div className={styles.head}>
        <div className="container">
          <div className={styles.head__wrapper}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.additional}>
              <Tags tags={tags} />
              <div className={styles.excerpt}>
                <p>{excerpt}</p>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles['info__author-avatar']}>
                <Image
                  className={styles['info__author-img']}
                  src={author.profile_image}
                  alt={`${author.name}'s avatar`}
                  width={50}
                  height={50}
                />
              </div>
              <div className={styles.info__text}>
                <div className={styles.info__author}>{author.name}</div>
                <div className={styles.info__numbers}>
                  <span className={styles.info__updated}>
                    {format(new Date(updated_at), 'MMM do, yyyy')}
                  </span>
                  <span className={styles.divider}>·</span>
                  <span className={styles['info__time-to-read']}>
                    {`${reading_time} min read`}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cover}>
        <Image
          className={styles.cover__img}
          src={feature_image}
          alt="Post's cover"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default DedicatedPost;
