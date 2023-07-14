import React from 'react';
import { Heading } from '@chakra-ui/react';
import { Box, VStack, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CoinCard = ({ id, name, currency, image, price, symbol, logo }) => {
  return (
    <>
      <Link to={`/coin/${id}/${symbol}/${currency}`}>
        <Box>
          <VStack
            w={'52'}
            borderWidth={2}
            shadow={'lg'}
            p={'8'}
            borderRadius={'lg'}
            transition={'all 0.3s'}
            m={'4'}
            css={{
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <Image
              src={image}
              w={'10'}
              h={'10'}
              objectFit={'contain'}
              alt={'Exchange'}
            />
            <Text>{logo}</Text>
            <Heading size={'md'} noOfLines={1}>
              {symbol}
              {price}
            </Heading>

            <Text noOfLines={1}>{name}</Text>
          </VStack>
        </Box>
      </Link>
    </>
  );
};

export default CoinCard;
