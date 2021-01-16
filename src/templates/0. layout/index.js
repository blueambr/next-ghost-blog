import Head from 'next/head';
import Header from '@/sections/Header';

const Layout = ({ data, children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="theme-color" content="#008fff" />
      <title>Next Ghost Blog</title>
    </Head>

    <Header data={data} />
    {children}
  </>
);

export default Layout;
