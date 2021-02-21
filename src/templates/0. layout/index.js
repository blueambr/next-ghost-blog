import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@/sections/Header';

const Layout = ({ data, meta, children }) => {
  const { asPath } = useRouter();
  const { title, description } = data;
  const { pageTitle, pageTitleAfter, ogType, ogDescription, ogImage } = meta;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          {!pageTitleAfter
            ? `${pageTitle} from ${title}`
            : `${pageTitle} from ${title} ${pageTitleAfter}`}
        </title>
        {asPath === '/' && <meta name="description" content={description} />}
        <link rel="canonical" href={`https://vladg.dev${asPath}`} />

        {/* og */}
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content={ogType || 'website'} />
        <meta
          property="og:title"
          content={
            !pageTitleAfter
              ? `${pageTitle} from ${title}`
              : `${pageTitle} from ${title} ${pageTitleAfter}`
          }
        />
        <meta
          property="og:description"
          content={ogDescription || description}
        />
        <meta property="og:url" content={`https://vladg.dev${asPath}`} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        {/* * */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={
            !pageTitleAfter
              ? `${pageTitle} from ${title}`
              : `${pageTitle} from ${title} ${pageTitleAfter}`
          }
        />
        <meta
          name="twitter:description"
          content={ogDescription || description}
        />
        <meta name="twitter:url" content="https://vladg.dev/" />
        {/* * */}

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
        {/* * */}

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              publisher: {
                '@type': 'Person',
                name: 'Vlad Gerasimovich',
                url: 'https://vladg.dev/',
              },
              url: 'https://vladg.dev/',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': 'https://vladg.dev/',
              },
              description: `${description}`,
            }),
          }}
        />
        {/* * */}
      </Head>

      <Header data={data} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
