import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import c from 'clsx';
import staticData from 'lib/static.json';
import styles from './Crumbs.module.scss';

const Breadcrumbs = ({
  rootLabel,
  omitRootLabel,
  replaceCharacterList = [{ from: '-', to: ' ' }],
  transformLabel,
  omitIndexList,
  omitHrefs,
  omitNumbers,
  containerStyle,
  containerClassName,
  listStyle,
  listClassName,
  inactiveItemStyle,
  inactiveItemClassName,
  activeItemStyle,
  activeItemClassName,
  linkStyle,
  linkClassName,
}) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  const getPathFromUrl = (url) => url.split(/[?#]/)[0];

  const convertBreadcrumb = (title) => {
    let transformedTitle = getPathFromUrl(title);

    if (replaceCharacterList) {
      for (let i = 0; i < replaceCharacterList.length; i++) {
        transformedTitle = transformedTitle.replaceAll(
          replaceCharacterList[i].from,
          replaceCharacterList[i].to
        );
      }
    }

    if (transformLabel) {
      return transformLabel(transformedTitle);
    }

    // Decode UTF-8 characters and return ASCII
    return decodeURI(transformedTitle);
  };

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => ({
        breadcrumb: path,
        href: `/${linkPath.slice(0, i + 1).join('/')}`,
      }));

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav style={containerStyle} className={containerClassName} aria-label="breadcrumbs">
      <ol style={listStyle} className={listClassName}>
        {!omitRootLabel && (
          <li style={inactiveItemStyle} className={inactiveItemClassName}>
            <Link href="/">
              <a style={linkStyle} className={linkClassName}>
                {convertBreadcrumb(rootLabel || 'Home')}
              </a>
            </Link>
          </li>
        )}
        {breadcrumbs.length >= 1 &&
          breadcrumbs.map((breadcrumb, i) => {
            if (
              !breadcrumb ||
              breadcrumb.breadcrumb.length === 0 ||
              (omitIndexList && omitIndexList.includes(i)) ||
              (omitHrefs && omitHrefs.includes(breadcrumb.href)) ||
              (omitNumbers && !isNaN(breadcrumb.breadcrumb))
            ) {
              return null;
            }

            return (
              <li
                key={breadcrumb.href}
                className={
                  i === breadcrumbs.length - 1 ? activeItemClassName : inactiveItemClassName
                }
                style={i === breadcrumbs.length - 1 ? activeItemStyle : inactiveItemStyle}
              >
                <Link href={breadcrumb.href}>
                  <a style={linkStyle} className={linkClassName}>
                    {convertBreadcrumb(breadcrumb.breadcrumb)}
                  </a>
                </Link>
              </li>
            );
          })}
      </ol>
    </nav>
  );
};

const Crumbs = () => {
  const { breadcrumbs } = staticData;
  const { home } = breadcrumbs;

  return (
    <section className={c('section', styles.breadcrumbs)}>
      <div className="container">
        <div className={styles.wrapper}>
          <Breadcrumbs
            rootLabel={home}
            containerClassName={c('breadcrumb', styles.nav, 'has-arrow-separator', 'is-medium')}
            activeItemClassName={c(styles.item, 'is-active')}
            inactiveItemClassName={c(styles.item)}
            linkClassName={c(styles.link)}
            omitHrefs={['/tag']}
            replaceCharacterList={[
              { from: '.', to: ' ' },
              { from: '-', to: ' ' },
            ]}
            transformLabel={(title) => {
              if (!isNaN(title)) {
                return `Page ${title}`;
              }

              return title;
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Crumbs;
