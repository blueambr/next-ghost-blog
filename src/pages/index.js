import { getSettings, getAllPostsPage, getFeaturedPosts } from 'lib/content';
import Layout from '@/layout';
import Featured from '@/sections/Featured';
import Posts from '@/sections/Posts';

const Home = ({ settings, posts, featuredPosts, pagination }) => {
  const meta = {
    pageTitle: 'Welcome!',
  };
  const recentPageLink = { href: '/recent', text: 'Recent' };

  return (
    <Layout data={settings} meta={meta}>
      <Featured posts={featuredPosts} />
      <Posts
        pageLink={recentPageLink}
        posts={posts}
        pagination={pagination}
        paginationRoot="recent"
      />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const settings = await getSettings();
  const posts = await getAllPostsPage();
  const featuredPosts = await getFeaturedPosts();

  const { meta } = posts;
  const { pagination } = meta;

  return {
    props: { settings, posts, featuredPosts, pagination },
  };
};
