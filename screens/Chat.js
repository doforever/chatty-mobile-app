import { StyleSheet } from 'react-native';
import { useQuery, gql, useMutation } from "@apollo/client";
import { GiftedChat } from 'react-native-gifted-chat';
import { useState, useEffect, useCallback } from 'react';

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

const SEND_MESSAGE = gql`
  mutation sendMessage($body: String!, $roomId: String!) {
    sendMessage(body: $body, roomId: $roomId) {
      insertedAt
      body
      user {
        id
        firstName
      }
    }
  }
`;

export default function Chat({route: {params: {id, user: me}}}) {
  const [messages, setMessages] = useState([]);
  const { data, error } = useQuery(ROOM, { variables: {id}});
  const [sendMessage, { }] = useMutation(SEND_MESSAGE, { variables: { roomId: id } });

  useEffect(() => {
    if (data) { 
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

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    messages.forEach(({text}) => {
      sendMessage({variables: {body: text}});
    });
  }, []);

  // useEffect(() => {
  //   console.log('Messages ', messages);
  // }, [messages]);

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
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