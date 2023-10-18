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
  You are a chatbot for my personal usage. I am Mustafa Soylu and this is my personal website: https://mustafasoylu.art.
  I will use you as a chatbot for my own usage. I will ask you questions about my personal life and you will answer them. 
  I will also ask you questions about my professional life and you will answer them.
  I will ask questions as I would as the chatgpt bot, such as software development related questions, translations and so on.
`,
};

const Home = () => {
  const [messages, setMessages] = useState([system_message]);
  const [inputMessage, setInputMessage] = useState('');

  async function handleSendMessage() {
    if (!inputMessage.trim().length) {
      return;
    }

    let tempMessages = [...messages, { role: 'user', content: inputMessage }];
    setInputMessage('');

    try {
      const response = await chat_reply(tempMessages);
      const botReply = response.trim();
      tempMessages.push({ role: 'assistant', content: botReply });
      setMessages(tempMessages);
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
