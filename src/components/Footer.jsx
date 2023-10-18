import React from 'react';
import { Flex, Button, Textarea } from '@chakra-ui/react';

const Footer = ({ inputMessage, setInputMessage, handleSendMessage }) => {
  return (
    <Flex w="100%" mt="5" background="gray.100" p="2">
      <Textarea
        placeholder="Type Something..."
        border="none"
        borderRadius="none"
        _focus={{
          border: '1px solid black',
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            if (inputMessage.trim().length > 0) handleSendMessage();
            e.preventDefault();
          }
        }}
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        maxH="200px"
        overflowY="auto"
        background="white"
        mr="2"
      />
      <Button
        bg="blue.500"
        color="white"
        borderRadius="none"
        _hover={{
          bg: 'white',
          color: 'blue.500',
          border: '1px solid black',
        }}
        disabled={inputMessage.trim().length <= 0}
        onClick={handleSendMessage}
      >
        Send
      </Button>
    </Flex>
  );
};

export default Footer;
