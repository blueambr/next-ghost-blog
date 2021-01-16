import { getSettings, getFeaturedPosts, getAllPosts } from 'lib/posts';
import Layout from '@/layout';
import Featured from '@/sections/Featured';
import data from 'data.json';

const Home = ({ settings, featuredPosts, posts }) => {
  const { featured } = data;
  const { pageLink } = featured;

  return (
    <>
      <Layout data={settings}>
        <Featured pageLink={pageLink} posts={featuredPosts} />
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
