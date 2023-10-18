import React from 'react';
import { Box } from '@chakra-ui/react';
import MarkdownWrapper from './MarkdownWrapper';

const CustomReactMarkdown = ({ content }) => (
  <Box p={4} bg="white" boxShadow="md" rounded="lg">
    <MarkdownWrapper content={content} />
  </Box>
);

export default CustomReactMarkdown;
