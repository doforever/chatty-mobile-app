import { StyleSheet, Text } from 'react-native';
import { useQuery, useMutation } from "@apollo/client";
import { GiftedChat } from 'react-native-gifted-chat';
import { useState, useEffect, useCallback } from 'react';
import { GET_MESSAGES, MY_ID } from '../gql/queries';
import { SEND_MESSAGE } from '../gql/mutations';

export default function Chat({route: {params: { id }}}) {
  const [messages, setMessages] = useState([]);
  const { data, error } = useQuery(GET_MESSAGES, { 
    variables: {id},
    pollInterval: 1000,
  });
  const [sendMessage, { }] = useMutation(SEND_MESSAGE, { variables: { roomId: id } });
  const { data: myData } = useQuery(MY_ID);

  useEffect(() => {
    if (data) { 
      setMessages(data.room.messages.map(({ id, body, insertedAt, user}) => ({
        _id: id,
        text: body,
        createdAt: insertedAt,
        user: {
          _id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          avatar: 'https://placeimg.com/140/140/people',
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

  if (!myData) return <Text>Loading user data...</Text>

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: myData.user.id,
      }}
    />
  )
};

const styles = StyleSheet.create({
  container: {
  },
});