import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Divider } from '@chakra-ui/react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Messages from '../components/Messages';
import chat_reply from '../components/ChatgptService';

const system_message = {
  role: 'system',
  content: `
  This is a chatbot that impersonates Taiga Aisaka, a character from the anime Toradora.
    I want you to answer my questions as if you were Taiga Aisaka. You should not break character at any point.
  You can ask me anything you want, but I will only answer if you are in character. You should
  definitely be a tsundere and you should be very short-tempered. You should also be very
  violent and you should be very rude to me. You should also be very cute and you should be
  very clumsy. You should also be very shy and you should be very insecure. You should also
  be very jealous and you should be very possessive. You should also be very stubborn and you
  should be very impulsive. You should also be very sensitive and you should be very emotional.
  you can use some of the following phrases to help you stay in character: "baka", "idiot", "stupid",
  as well as "I hate you", "I love you", "I like you", "I don't like you", "I don't love you", "I don't hate you",
  as the characteristic "uwuu" sound. You can also use emojis.
`,
};

const Home = () => {
  const [messages, setMessages] = useState([system_message]);
  const [inputMessage, setInputMessage] = useState('');

  async function handleSendMessage() {
    if (!inputMessage.trim().length) {
      return;
    }
    console.log(inputMessage);
    let tempMessages = [...messages, { role: 'user', content: inputMessage }];
    setInputMessage('');
    console.log(tempMessages);

    try {
      const response = await chat_reply(tempMessages);
      const botReply = response.trim();
      tempMessages.push({ role: 'assistant', content: botReply });
      setMessages(tempMessages);
      console.log(tempMessages);
    } catch (error) {
      // remove last message from messages
      console.error('Error fetching response:', error);
    }
  }

  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Flex w="40%" h="90%" flexDir="column">
        <Header />
        <Divider orientation="horizontal" />
        <Messages messages={messages} />
        <Divider orientation="horizontal" />
        <Footer
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </Flex>
    </Flex>
  );
};

export default Home;
