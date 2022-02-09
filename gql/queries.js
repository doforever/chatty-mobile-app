import { gql } from '@apollo/client';

export const USER_ROOMS = gql`
query getUserRooms {
    usersRooms {
      rooms {
        id
        name
      }
    }
  }
`;

export const GET_MESSAGES = gql`
    query getRoom ($id: ID!)  {
      room (id: $id) {
        messages {
          insertedAt
          body
          id
          user {
            id
            firstName
            lastName
          }
        }
      }
    }
`;

export const MY_ID = gql`
  query getMyId {
    user {
      id
    }
  }
`;