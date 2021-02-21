import { getSettings, getAllPosts, getSinglePost } from 'lib/content';
import Layout from '@/layout';

const PostPage = ({ settings, post }) => {
  const { title, html, excerpt, feature_image } = post;
  const meta = {
    pageTitle: `«${title}»`,
    ogType: 'article',
    ogDescription: excerpt,
    ogImage: feature_image,
  };

  return (
    <Layout data={settings} meta={meta}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default PostPage;

export const getStaticPaths = async () => {
  const posts = await getAllPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { slug } = params;

  const settings = await getSettings();
  const post = await getSinglePost(slug);

  return {
    props: { settings, post },
  };
};
