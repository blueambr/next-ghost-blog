import { getSettings, getFeaturedPosts, getAllPosts } from 'lib/content';
import Layout from '@/layout';
import Featured from '@/sections/Featured';
import Posts from '@/sections/Posts';

const Home = ({ settings, featuredPosts, posts }) => {
  const recentPageLink = { href: '/recent', text: 'Recent' };

  return (
    <>
      <Layout data={settings}>
        <Featured posts={featuredPosts} />
        <Posts pageLink={recentPageLink} posts={posts} />
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps = async (context) => {
  const settings = await getSettings();
  const featuredPosts = await getFeaturedPosts();
  const posts = await getAllPosts();

  return {
    props: { settings, featuredPosts, posts },
  };
};
