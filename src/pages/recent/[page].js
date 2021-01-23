import { getSettings, getAllPostsPage } from 'lib/content';
import Layout from '@/layout';
import Posts from '@/sections/Posts';

const RecentPage = ({ settings, posts }) => (
  <Layout data={settings}>
    <Posts posts={posts} />
  </Layout>
);

export const getStaticPaths = async () => {
  const posts = await getAllPostsPage();

  const { meta } = posts;
  const { pagination } = meta;
  const { pages } = pagination;

  const paths = [];

  for (let i = 0; i < pages; i++) {
    paths.push({ params: { page: (i + 1).toString() } });
  }

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { page } = params;

  const settings = await getSettings();
  const posts = await getAllPostsPage(page);

  return {
    props: { settings, posts },
  };
};

export default RecentPage;
