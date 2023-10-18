import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkLint from 'remark-lint';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeRaw from 'rehype-raw';
import { Code, Heading, Link, Text, Image, Box } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';

function MarkdownWrapper({ content }) {
  const h2Color = useColorModeValue('black', 'white');

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkLint]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ inline, className, children }) {
          const match = /language-(\w+)/.exec(className || '');
          const lang = match?.[1] === 'js' ? 'javascript' : match?.[1];
          return !inline && match ? (
            <SyntaxHighlighter
              style={vscDarkPlus}
              PreTag="div"
              showLineNumbers
              showInlineLineNumbers
              language={lang}
              customStyle={{ marginBottom: '2rem' }}
            >
              {String(children).replace(/\n$/, '') || ''}
            </SyntaxHighlighter>
          ) : (
            <Code>{children}</Code>
          );
        },
        a({ children, href }) {
          return <Link href={href}>{children}</Link>;
        },
        h2({ children }) {
          return (
            <Heading
              as="h2"
              fontSize="xl"
              mt="8"
              mb="6"
              color={h2Color}
              fontWeight="bold"
            >
              {children}
            </Heading>
          );
        },
        h3({ children }) {
          return (
            <Heading
              as="h3"
              fontSize="md"
              mt="8"
              mb="6"
              color={h2Color}
              fontWeight="bold"
            >
              {children}
            </Heading>
          );
        },
        p({ children }) {
          return <Text mb="2">{children}</Text>;
        },
        li({ children }) {
          const child = children.filter((item) => item !== '\n');
          return (
            <Text as="li" mb="2" ms="4">
              {child}
            </Text>
          );
        },
        img({ src, alt }) {
          return (
            <Box width="100%" className="post-image-container">
              <Image src={src || ''} alt={alt} fit="cover" objectFit="cover" />
            </Box>
          );
        },
        blockquote({ children }) {
          return (
            <Box borderLeft={'4px'} borderLeftColor="gray.200" pl={2}>
              <Text as="i">{children}</Text>
            </Box>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export default MarkdownWrapper;
