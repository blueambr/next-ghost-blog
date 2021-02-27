import { getSettings, getAllPosts, getSinglePost } from 'lib/content';
import Layout from '@/layout';

const PostPage = ({ settings, post }) => {
  const {
    authors,
    excerpt,
    feature_image,
    html,
    published_at,
    updated_at,
    tags,
    title,
  } = post;
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
