import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@/sections/Header';
import styles from './Layout.module.scss';

const Layout = ({ data, meta, children }) => {
  const rootUrl = 'https://vladg.dev';
  const { asPath } = useRouter();
  const { title, description } = data;
  const {
    authors,
    ogDescription,
    ogImage,
    ogType,
    pageTitle,
    pageTitleAfter,
    publishedAt,
    schemaType,
    tags,
    updatedAt,
  } = meta;

  const author = authors ? authors[0] : null;
  const canonicalUrl = `${rootUrl}${asPath}`;

  const renderTitle = () => {
    if (ogType === 'article') {
      return pageTitle;
    }

    if (pageTitleAfter) {
      return `${pageTitle} from ${title} ${pageTitleAfter}`;
    }

    return `${pageTitle} from ${title}`;
  };

  const renderSchema = () => {
    if (ogType === 'article') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        publisher: {
          '@type': 'Person',
          name: 'Vlad Gerasimovich',
          url: rootUrl,
        },
        author: {
          '@type': 'Person',
          name: author.name,
          image: {
            '@type': 'ImageObject',
            url: author.profile_image,
            width: 400,
            height: 400,
          },
          url: author.url,
        },
        headline: renderTitle(),
        url: canonicalUrl,
        datePublished: publishedAt,
        dateModified: updatedAt,
        image: {
          '@type': 'ImageObject',
          url: ogImage,
          width: 2000,
          height: 1215,
        },
        keywords: `${tags.map((tag) => tag.name)}`,
        description: ogDescription,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': rootUrl,
        },
      };
    }

    if (schemaType === 'Series') {
      return {
        '@context': 'https://schema.org',
        '@type': schemaType || 'WebSite',
        publisher: {
          '@type': 'Person',
          name: 'Vlad Gerasimovich',
          url: rootUrl,
        },
        url: canonicalUrl,
        name: pageTitle,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': rootUrl,
        },
      };
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      publisher: {
        '@type': 'Person',
        name: 'Vlad Gerasimovich',
        url: rootUrl,
      },
      url: canonicalUrl,
      description,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': rootUrl,
      },
    };
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{renderTitle()}</title>
        {asPath === '/' && <meta name="description" content={description} />}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content={ogType || 'website'} />
        <meta property="og:title" content={renderTitle()} />
        {(asPath === '/' || ogDescription) && (
          <meta property="og:description" content={ogDescription || description} />
        )}
        <meta property="og:url" content={canonicalUrl} />
        {ogImage && (
          <>
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="2000" />
            <meta property="og:image:height" content="1215" />
          </>
        )}
        {/* * */}

        {/* Article-specific */}
        {ogType === 'article' && (
          <>
            <meta property="article:published_time" content={publishedAt} />
            <meta property="article:modified_time" content={updatedAt} />
            {tags.map((tag) => (
              <meta property="article:tag" content={tag.name} key={tag.id} />
            ))}
            <meta property="article:author" content={author.name} />
          </>
        )}
        {/* * */}

        {/* Twitter */}
        <meta
          name="twitter:card"
          content={ogType === 'article' ? 'summary_large_image' : 'summary'}
        />
        <meta name="twitter:title" content={renderTitle()} />
        {(asPath === '/' || ogDescription) && (
          <meta name="twitter:description" content={ogDescription || description} />
        )}
        <meta name="twitter:url" content={canonicalUrl} />
        {ogImage && <meta property="twitter:image" content={ogImage} />}
        {ogType === 'article' && (
          <>
            <meta name="twitter:label1" content="Written by" />
            <meta name="twitter:data1" content={author.name} />
            <meta name="twitter:label2" content="Filed under" />
            <meta name="twitter:data2" content={tags.map((tag) => tag.name)} />
          </>
        )}
        {/* * */}

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        {/* * */}

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(renderSchema()),
          }}
        />
        {/* * */}
      </Head>

      <Header data={data} />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
