import { getSettings, getAboutPage, getSinglePost } from 'lib/content';
import Layout from '@/layout';
import Crumbs from '@/sections/Crumbs';
import DedicatedPost from '@/sections/DedicatedPost';

const PostPage = ({ settings, about, post }) => {
  const { authors, excerpt, feature_image, published_at, tags, title, updated_at } = post;
  const meta = {
    authors,
    ogType: 'article',
    ogDescription: excerpt,
    ogImage: feature_image,
    pageTitle: title,
    publishedAt: published_at,
    updatedAt: updated_at,
    tags,
  };

  return (
    <Layout data={settings} meta={meta} about={about}>
      <Crumbs />
      <DedicatedPost data={post} />
      <Crumbs />
    </Layout>
  );
};

export default PostPage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { slug } = params;

  const post = await getSinglePost(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const settings = await getSettings();
  const aboutPage = await getAboutPage();

  const about = aboutPage.html;

  return {
    props: { settings, about, post },
  };
};
