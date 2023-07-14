import React from 'react';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

  
const Error = () => {
  return (
    <>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Error while fetching data</AlertTitle>
        <AlertDescription>
          Check your internet connection
        </AlertDescription>
      </Alert>
    </>
  );
};

export default Error;
