import GhostContentAPI from '@tryghost/content-api';
import privateData from 'private.json';

const { apiUrl, apiContentKey } = privateData;

const api = new GhostContentAPI({
  url: apiUrl,
  key: apiContentKey,
  version: 'v3',
});

export const getFeaturedPosts = async () =>
  api.posts
    .browse({
      filter: 'featured:true',
      include: 'tags',
      limit: 2,
      order: 'published_at DESC',
    })
    .catch((err) => {
      console.error(err);
    });

export const getAllPosts = async () =>
  api.posts
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error(err);
    });
