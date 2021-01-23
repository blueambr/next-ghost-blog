import { getSettings, getAllTags, getTagPage } from 'lib/content';
import Layout from '@/layout';
import Posts from '@/sections/Posts';

const TagPage = ({ settings, posts }) => (
  <Layout data={settings}>
    <Posts posts={posts} />
  </Layout>
);

export const getStaticPaths = async () => {
  const tags = await getAllTags();

  const paths = [];

  await Promise.all(
    tags.map(async (tag) => {
      const { slug } = tag;

      const posts = await getTagPage(slug);

      const { meta } = posts;
      const { pagination } = meta;
      const { pages } = pagination;

      paths.push({ params: { page: [slug] } });

      for (let i = 0; i < pages; i++) {
        paths.push({ params: { page: [slug, (i + 1).toString()] } });
      }
    })
  );

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { page } = params;

  const settings = await getSettings();
  const posts = await getTagPage(page[0], page[1] || 1);

  return {
    props: { settings, posts },
  };
};

export default TagPage;
