import { StyleSheet } from 'react-native';
import { useQuery, gql } from "@apollo/client";
import { GiftedChat } from 'react-native-gifted-chat';
import { useState, useEffect } from 'react';

const ROOM = gql`
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

export default function Chat({route: {params: {id, user: me}}}) {
  const [messages, setMessages] = useState([]);
  const { data, error } = useQuery(ROOM, { variables: {id}});

  // if (data) console.log('Data ', data);

  useEffect(() => {
    if (data) { 
      console.log('Ready to set messages');
      setMessages(data.room.messages.map(({ id, body, insertedAt, user}) => ({
        _id: id,
        text: body,
        createdAt: insertedAt,
        user: {
          _id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          avatar: 'https://placeimg.com/140/140/any',
        }
      })));
    }
    
  }, [data]);

  useEffect(() => {
    console.log('Messages ', messages);
  }, [messages]);

  return (
    <GiftedChat
      messages={messages}
      // onSend={messages => onSend(messages)}
      user={{
        _id: me.id,
      }}
    />
  )
};

const styles = StyleSheet.create({
  container: {
  },
});