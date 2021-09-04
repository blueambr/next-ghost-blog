import { getSettings, getAllPosts, getSinglePost } from 'lib/content';
import Layout from '@/layout';
import DedicatedPost from '@/sections/DedicatedPost';

const PostPage = ({ settings, post }) => {
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
    <Layout data={settings} meta={meta}>
      <DedicatedPost data={post} />
    </Layout>
  );
};

export default PostPage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { slug } = params;

  const settings = await getSettings();
  const post = await getSinglePost(slug);

  return {
    props: { settings, post },
  };
};
