import { getSettings, getAboutPage, readTag, getTagPage } from 'lib/content';
import Layout from '@/layout';
import Crumbs from '@/sections/Crumbs';
import Posts from '@/sections/Posts';

const TagPage = ({ settings, about, posts, pagination, slug, name }) => {
  const meta = {
    pageTitle: name,
    schemaType: 'Series',
  };

  return (
    <Layout data={settings} meta={meta} about={about}>
      <Crumbs />
      <Posts posts={posts} pagination={pagination} paginationRoot={`tag/${slug}`} />
      <Crumbs />
    </Layout>
  );
};

export default TagPage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { page } = params;
  const slug = page[0];

  const tag = await readTag(slug);

  if (!tag) {
    return {
      notFound: true,
    };
  }

  const settings = await getSettings();
  const aboutPage = await getAboutPage();
  const posts = await getTagPage(slug, page[1] || 1);

  if (!posts.length) {
    return {
      notFound: true,
    };
  }

  const { meta } = posts;
  const about = aboutPage.html;
  const { pagination } = meta;
  const { name } = tag;

  return {
    props: { settings, about, posts, pagination, slug, name },
  };
};
