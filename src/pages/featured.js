import { getSettings, getFeaturedPosts } from 'lib/content';
import Layout from '@/layout';
import Posts from '@/sections/Posts';

const FeaturedPage = ({ settings, posts }) => (
  <Layout data={settings}>
    <Posts posts={posts} />
  </Layout>
);

export default FeaturedPage;

export const getStaticProps = async () => {
  const settings = await getSettings();
  const posts = await getFeaturedPosts('all');

  return {
    props: { settings, posts },
  };
};
