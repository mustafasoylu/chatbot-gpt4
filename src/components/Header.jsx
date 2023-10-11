import React from 'react';
import { Flex, Avatar, AvatarBadge, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      w="100%"
      marginY={5}
      flexDirection="row"
      justifyContent="space-between"
    >
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          Chatbot with GPT-4
        </Text>
      </Flex>
      <Flex align="center">
        <Avatar
          size="lg"
          name="Mustafa Soylu"
          src="https://lh3.googleusercontent.com/a/ACg8ocILWSiH4Xqc_or7xs-T_6MykrQGJtpsD5tc3bc4tIJz5lA=s288-c-no"
        >
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
        <Flex flexDirection="column" mx="5" justify="center">
          <Text fontSize="lg" fontWeight="bold">
            Mustafa Soylu
          </Text>
          <Text color="green.500">Online</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
