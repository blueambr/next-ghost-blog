import {
  getSettings,
  getAllPostsPage,
  getFeaturedPostsPage,
} from 'lib/content';
import Layout from '@/layout';
import Featured from '@/sections/Featured';
import Posts from '@/sections/Posts';

const Home = ({ settings, posts, featuredPosts, pagination }) => {
  const { page, pages, prev, next } = pagination;
  const recentPageLink = { href: '/recent', text: 'Recent' };

  return (
    <Layout data={settings}>
      <Featured posts={featuredPosts} />
      <Posts pageLink={recentPageLink} posts={posts} />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const settings = await getSettings();
  const posts = await getAllPostsPage();
  const featuredPosts = await getFeaturedPostsPage();

  const { meta } = posts;
  const { pagination } = meta;

  return {
    props: { settings, posts, featuredPosts, pagination },
  };
};
