import { Box, Flex, Text } from '@chakra-ui/react';
import useTypewriter from 'react-typewriter-hook';

function CenteredSiteName() {
  const text = 'DCrypto';
  const typedText = useTypewriter(text);

  return (
    <Box
      backgroundImage="url('https://images.unsplash.com/photo-1631603090989-93f9ef6f9d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80')"
      backgroundSize="cover"
      filter="hue-rotate(360deg)"
      backgroundPosition="center"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        bg="rgba(0, 0, 0, 0.6)" 
        borderRadius="md"
        padding={4}
        justifyContent="center"
        alignItems="center"
      >
        <Text
          color="white"
          fontSize="80"
          fontWeight="bold"
          textAlign="center"
        >
          {typedText}
        </Text>
      </Flex>
    </Box>
  );
}

export default CenteredSiteName;
