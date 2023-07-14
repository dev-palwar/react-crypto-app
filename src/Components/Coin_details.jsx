import {
  Badge,
  Box,
  Container,
  HStack,
  Image,
  Progress,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import Error from './Error';
import Chart from '../Components/Chart';

const Coin_details = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [chartArray, setChartArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${params.id}`
        );
        const { data: chartData } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=${params.currency}&days=1`
        );
        setChartArray(chartData.prices);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        <Error />;
      }
    };
    fetchData();
  }, [params.id]);

  return (
    <>
      {loading == true ? (
        <Loader />
      ) : (
        <Container maxW={'container.xl'}>
          <Box my={2} marginBottom={"-5"} opacity={0.4}><Text>Data of last 24hrs</Text></Box>
          <Box width={'full'} borderWidth={1} my={6}>
            <Chart chartArray={chartArray} currency={params.currencySymbol} />
          </Box>

          <VStack spacing={'4'} p="16" alignItems={'flex-start'}>
            <Text fontSize={'small'} alignSelf="center" opacity={0.7}>
              Last Updated On{' '}
              {Date(coin.market_data.last_updated).split('G')[0]}
            </Text>
            <Image
              src={coin.image.large}
              w={'16'}
              h={'16'}
              objectFit={'contain'}
            />

            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>
                {params.currencySymbol}
                {coin.market_data.current_price[params.currency]}
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    coin.market_data.price_change_percentage_24h > 0
                      ? 'increase'
                      : 'decrease'
                  }
                />
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>

            <Badge
              fontSize={'2xl'}
              bgColor={'blackAlpha.800'}
              color={'white'}
            >{`#${coin.market_cap_rank}`}</Badge>

            <CustomBar
              high={`${params.currencySymbol}${
                coin.market_data.high_24h[params.currency]
              }`}
              low={`${params.currencySymbol}${
                coin.market_data.low_24h[params.currency]
              }`}
            />
          </VStack>
          <Box w={'full'} p="4">
              <Item title={'Max Supply'} value={coin.market_data.max_supply} />
              <Item
                title={'Circulating Supply'}
                value={coin.market_data.circulating_supply}
              />
              <Item
                title={'Market Cap'}
                value={`${params.currencySymbol}${
                  coin.market_data.market_cap[params.currency]
                }`}
              />
              <Item
                title={'All Time Low'}
                value={`${params.currencySymbol}${
                  coin.market_data.atl[params.currency]
                }`}
              />
              <Item
                title={'All Time High'}
                value={`${params.currencySymbol}${
                  coin.market_data.ath[params.currency]
                }`}
              />
            </Box>
        </Container>
      )}
    </>
  );
};

const Item = ({ title, value }) => (
  <HStack justifyContent={'space-between'} w={'full'} my={'4'}>
    <Text fontFamily={'Bebas Neue'} letterSpacing={'widest'}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);

const CustomBar = ({ high, low }) => (
  <VStack w={'full'}>
    <Progress value={50} colorScheme={'teal'} w={'full'} />
    <HStack justifyContent={'space-between'} w={'full'}>
      <Badge children={low} colorScheme={'red'} />
      <Text fontSize={'sm'}>24H Range</Text>
      <Badge children={high} colorScheme={'green'} />
    </HStack>
  </VStack>
);

export default Coin_details;
