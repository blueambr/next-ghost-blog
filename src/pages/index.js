import { getSettings, getAboutPage, getAllPostsPage, getFeaturedPosts } from 'lib/content';
import Layout from '@/layout';
import Featured from '@/sections/Featured';
import Posts from '@/sections/Posts';

const Home = ({ settings, about, posts, featuredPosts, pagination }) => {
  const meta = {
    pageTitle: 'Greetings',
  };
  const recentPageLink = { href: '/recent', text: 'Recent' };

  return (
    <Layout data={settings} meta={meta} about={about}>
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

export const getServerSideProps = async () => {
  const settings = await getSettings();
  const aboutPage = await getAboutPage();
  const posts = await getAllPostsPage();
  const featuredPosts = await getFeaturedPosts();

  const { meta } = posts;
  const about = aboutPage.html;
  const { pagination } = meta;

  return {
    props: { settings, about, posts, featuredPosts, pagination },
  };
};
