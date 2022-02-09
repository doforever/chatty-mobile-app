import { Text, View, Image } from 'react-native';
import { useQuery, useMutation } from "@apollo/client";
import { GiftedChat, Send, InputToolbar } from 'react-native-gifted-chat';
import { useState, useEffect, useCallback } from 'react';
import { GET_MESSAGES, MY_ID } from '../gql/queries';
import { SEND_MESSAGE } from '../gql/mutations';
import styles from '../stylesheets/ChatStyles';

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

  const renderSend = (props) => (
      <Send
        {...props}
        style={{flexDirection: 'row'}}
      >
      <View style={{ flexDirection: 'row' }}>
          <Image 
            source={require('../assets/send.png')} 
            style={styles.send}
          />
        </View>
      </Send>
  );

  const renderInputToolbar = (props) => (
    <InputToolbar {...props} containerStyle={styles.inputToolbar}></InputToolbar>
  );

  if (!myData) return <Text>Loading user data...</Text>

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: myData.user.id,
      }}
      scrollToBottom={true}
      listViewProps={{ style: styles.listView }}
      renderDay={() => {}}
      renderTime={() => { }}
      renderSend={renderSend}
      renderInputToolbar={renderInputToolbar}
      minInputToolbarHeight={60}
      textInputStyle={styles.input}
      alwaysShowSend={true}
    />
  )
};