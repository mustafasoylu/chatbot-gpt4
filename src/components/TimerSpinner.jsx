import React, { useState, useEffect } from 'react';
import { Box, Spinner, Badge } from '@chakra-ui/react';

const CustomSpinner = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let startTimestamp;

    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const delta = timestamp - startTimestamp;

      if (delta >= 100) {
        // Update every second
        setElapsedTime((oldTime) => oldTime + 0.1);
        startTimestamp = timestamp;
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <Box position="relative" d="inline-block" m="20px">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Badge
        position="absolute"
        top="0"
        right="0"
        borderRadius="full"
        p="1"
        colorScheme="blue"
        fontSize="0.6em"
      >
        {elapsedTime.toFixed(1)}s
      </Badge>
    </Box>
  );
};

export default CustomSpinner;
