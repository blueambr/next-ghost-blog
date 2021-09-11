import GhostContentAPI from '@tryghost/content-api';
import privateData from 'private.json';

const { apiUrl, apiContentKey } = privateData;

const api = new GhostContentAPI({
  url: apiUrl,
  key: apiContentKey,
  version: 'v3',
});

export const getSettings = async () =>
  api.settings.browse().catch((err) => {
    console.error(err);
  });

export const getAllPosts = async () =>
  api.posts
    .browse({
      fields: 'slug',
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });

export const getAllPostsPage = async (page) =>
  api.posts
    .browse({
      include: 'tags',
      limit: 5,
      order: 'published_at DESC',
      page: page || 1,
    })
    .catch((err) => {
      console.error(err);
    });

export const getFeaturedPosts = async (limit) =>
  api.posts
    .browse({
      filter: 'featured:true',
      include: 'tags',
      limit: limit || 2,
      order: 'published_at DESC',
    })
    .catch((err) => {
      console.error(err);
    });

export const getSinglePost = async (postSlug) =>
  api.posts
    .read({
      slug: postSlug,
      include: 'tags,authors',
    })
    .catch((err) => {
      console.error(err);
    });

export const getAllTags = async () =>
  api.tags
    .browse({
      fields: 'slug',
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });

export const readTag = async (slug) =>
  api.tags
    .read({
      slug,
      fields: 'name',
    })
    .catch((err) => {
      console.error(err);
    });

export const getTagPage = async (slug, page) =>
  api.posts
    .browse({
      filter: `tag:${slug}`,
      include: 'tags',
      limit: 5,
      order: 'published_at DESC',
      page: page || 1,
    })
    .catch((err) => {
      console.error(err);
    });

export const getAboutPage = async () =>
  api.pages.read({ id: '612779ea60295e1a8df302a5' }).catch((err) => {
    console.error(err);
  });
