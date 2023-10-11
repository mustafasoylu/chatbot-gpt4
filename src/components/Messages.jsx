import React, { useEffect, useRef } from 'react';
import { Avatar, Flex, Text } from '@chakra-ui/react';

const Messages = ({ messages }) => {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  return (
    <Flex
      w="100%"
      h="80%"
      overflowY="scroll"
      flexDirection="column"
      p="3"
      background="gray.50"
    >
      {messages.map((item, index) => {
        if (item.role === 'user') {
          return (
            <Flex key={index} w="100%" justify="flex-end">
              <Flex
                bg="black"
                color="white"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
                rounded="xl"
              >
                <Text>{item.content}</Text>
              </Flex>
            </Flex>
          );
        } else if (item.role === 'assistant') {
          return (
            <Flex key={index} w="100%">
              <Avatar name="Chatgpt" src="/logo192.png" bg="white"></Avatar>
              <Flex
                bg="gray.100"
                color="black"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
                rounded="xl"
              >
                <Text>{item.content}</Text>
              </Flex>
            </Flex>
          );
        }
      })}
      <AlwaysScrollToBottom />
    </Flex>
  );
};

export default Messages;
