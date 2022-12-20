import { gql } from "@apollo/client";

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

export const GET_POSTS_BY_CATEGORY_ORDENED_QUERY = gql`
  query ($category: Categories) {
    posts(where: { category: $category }, orderBy: createdAt_DESC) {
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
