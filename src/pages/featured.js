import { getSettings, getFeaturedPosts } from 'lib/content';
import Layout from '@/layout';
import Posts from '@/sections/Posts';

const FeaturedPage = ({ settings, posts }) => {
  const meta = {
    pageTitle: 'Featured posts',
    schemaType: 'Series',
  };

  return (
    <Layout data={settings} meta={meta}>
      <Posts posts={posts} />
    </Layout>
  );
};

export default FeaturedPage;

export const getServerSideProps = async () => {
  const settings = await getSettings();
  const posts = await getFeaturedPosts('all');

  return {
    props: { settings, posts },
  };
};
