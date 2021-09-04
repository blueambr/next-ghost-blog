import { getSettings, getAllPostsPage } from 'lib/content';
import Layout from '@/layout';
import Posts from '@/sections/Posts';

const RecentPage = ({ settings, posts, pagination }) => {
  const { page } = pagination;
  const meta = {
    pageTitle: 'Recent posts',
    pageTitleAfter: page !== 1 ? `• Page ${page}` : null,
    schemaType: 'Series',
  };

  return (
    <Layout data={settings} meta={meta}>
      <Posts posts={posts} pagination={pagination} paginationRoot="recent" />
    </Layout>
  );
};

export default RecentPage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { page } = params;

  const settings = await getSettings();
  const posts = await getAllPostsPage(page ? page[0] : 1);

  const { meta } = posts;
  const { pagination } = meta;

  return {
    props: { settings, posts, pagination },
  };
};
