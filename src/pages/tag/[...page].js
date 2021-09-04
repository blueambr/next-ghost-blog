import { getSettings, getAllTags, readTag, getTagPage } from 'lib/content';
import Layout from '@/layout';
import Posts from '@/sections/Posts';

const TagPage = ({ settings, posts, pagination, slug, name }) => {
  const meta = {
    pageTitle: name,
    schemaType: 'Series',
  };

  return (
    <Layout data={settings} meta={meta}>
      <Posts posts={posts} pagination={pagination} paginationRoot={`tag/${slug}`} />
    </Layout>
  );
};

export default TagPage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { page } = params;
  const slug = page[0];

  const settings = await getSettings();
  const posts = await getTagPage(slug, page[1] || 1);
  const tag = await readTag(slug);

  const { meta } = posts;
  const { pagination } = meta;
  const { name } = tag;

  return {
    props: { settings, posts, pagination, slug, name },
  };
};
