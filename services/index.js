import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            query Assets {
                postsConnection {
                  edges {
                    node {
                      author {
                        bio
                        name
                        id
                        photo {
                          url
                        }
                      }
                      createdAt
                      slug
                      title
                      excrpt
                      featuredImage {
                        url
                      }
                      categories {
                        name
                        slug
                      }
                    }
                }
              }
            }

        }
    `
    const results = await request(graphqlAPI, query)
}
