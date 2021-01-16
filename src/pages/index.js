import { getFeaturedPosts, getAllPosts } from 'lib/posts';
import Layout from '@/layout';
import Header from '@/sections/Header';
import Featured from '@/sections/Featured';
import data from 'data.json';

const Home = ({ featuredPosts, posts }) => (
  <>
    <Layout>
      <Header data={data} />
      <Featured posts={featuredPosts} />
    </Layout>
  </>
);

export default Home;

export const getStaticProps = async (context) => {
  const featuredPosts = await getFeaturedPosts();
  const posts = await getAllPosts();

  return {
    props: { featuredPosts, posts },
  };
};
