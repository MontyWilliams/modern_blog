import { GraphQLClient, gql } from 'graphql';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
    }
  })

  const query = gql`
    mutation CreateBomment($name: String!, $email: String!, $comment: String!, $slug: String!)
      createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug}}}) { id }
    `
}
