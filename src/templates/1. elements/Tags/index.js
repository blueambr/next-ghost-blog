import Link from 'next/link';
import styles from './Tags.module.scss';

const Tags = ({ tags }) => (
  <ul className={styles.tags}>
    {tags.map((tag) => (
      <li className={styles.tag} key={tag.id}>
        <Link href={`/tag/${tag.slug}`}>
          {tag.accent_color ? (
            <a className={styles.tag__link} style={{ color: tag.accent_color }}>
              {tag.name}
            </a>
          ) : (
            <a className={styles.tag__link}>{tag.name}</a>
          )}
        </Link>
      </li>
    ))}
  </ul>
);

export default Tags;
