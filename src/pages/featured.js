import { getSettings, getAboutPage, getFeaturedPosts } from 'lib/content';
import Layout from '@/layout';
import Posts from '@/sections/Posts';

const FeaturedPage = ({ settings, about, posts }) => {
  const meta = {
    pageTitle: 'Featured posts',
    schemaType: 'Series',
  };

  return (
    <Layout data={settings} meta={meta} about={about}>
      <Posts posts={posts} />
    </Layout>
  );
};

export default FeaturedPage;

export const getServerSideProps = async () => {
  const settings = await getSettings();
  const aboutPage = await getAboutPage();
  const posts = await getFeaturedPosts('all');

  const about = aboutPage.html;

  return {
    props: { settings, about, posts },
  };
};
