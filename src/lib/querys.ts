import { gql } from "@apollo/client";

export const GET_POSTS_QUERY = gql`
  query {
    posts {
      title
      description
      createdAt
      slug
      thumbnail {
        url
      }
    }
  }
`;

export const GET_POST_BY_SLUG_QUERY = gql`
  query ($slug: String) {
    post(where: { slug: $slug }) {
      title
      author
      category
      thumbnailDescription
      createdAt
      updatedAt
      tags
      description
      content {
        markdown
        html
      }
      slug
      thumbnail {
        url
      }
      comments {
        name
        content
      }
    }
  }
`;

export const GET_FIRST_FOUR_POSTS_BY_CATEGORY_ORDERED_QUERY = gql`
  query ($category: Categories) {
    posts(where: { category: $category }, orderBy: createdAt_DESC, first: 4) {
      author
      createdAt
      title
      description
      slug
      thumbnail {
        url
      }
      category
    }
  }
`;

export const GET_FIRST_FOUR_POSTS_ORDERED_BY_LIKES_QUERY = gql`
  query {
    posts(orderBy: likes_DESC, first: 4) {
      category
      title
      publishedAt
      slug
      description
      thumbnail {
        url(transformation: { image: { resize: { height: 400, width: 750, fit: max } } })
      }
    }
  }
`;
