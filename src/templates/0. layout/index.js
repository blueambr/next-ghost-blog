import Head from 'next/head';
import Header from '@/sections/Header';

const Layout = ({ data, children }) => {
  const { title, description, meta_title, meta_description } = data;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={meta_description || description} />
        <link rel="canonical" href="https://vladg.dev/" />

        {/* og */}
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta_title || title} />
        <meta
          property="og:description"
          content={meta_description || description}
        />
        <meta property="og:url" content="https://vladg.dev/" />
        {/* * */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content={meta_description || description}
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
              description: `${meta_description || description}`,
            }),
          }}
        />
        {/* * */}
      </Head>

      <Header data={data} />
      {children}
    </>
  );
};

export default Layout;
