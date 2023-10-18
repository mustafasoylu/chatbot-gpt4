import React, { useEffect, useRef } from 'react';
import { Avatar, Flex } from '@chakra-ui/react';
import TimerSpinner from './TimerSpinner';
import CustomReactMarkdown from './CustomReactMarkdown';

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
                color="black"
                minW="100px"
                maxW="350px"
                my="1"
                p="3"
                rounded="xl"
              >
                <CustomReactMarkdown content={item.content} />
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
                <CustomReactMarkdown content={item.content} />
              </Flex>
            </Flex>
          );
        } else if (item.role === 'spinner') {
          return (
            <Flex key={index} w="100%">
              <TimerSpinner />
            </Flex>
          );
        }
      })}
      <AlwaysScrollToBottom />
    </Flex>
  );
};

export default Messages;
