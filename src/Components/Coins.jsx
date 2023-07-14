import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoinCard from './CoinCard';
import Error from './Error';
import { Box, Button, Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';
import { Radio, RadioGroup } from '@chakra-ui/react';

const Coins = () => {
  const [dataArr, setDataArr] = useState([]);
  const [error, setError] = useState(false);
  const [isThereData, setData] = useState(false);
  const [currency, setCurrency] = useState('inr');
  const [page, setPage] = useState('1')
  const currencySymbol =
    currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setDataArr(response.data);
        setData(true);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, [currency, page]);

  if (isThereData === true) {
    return (
      <>
        <Container maxW="1285px">
          <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
            <HStack spacing={'4'}>
              <Radio colorScheme="red" value={'inr'}>
                INR
              </Radio>
              <Radio colorScheme="blue" value={'usd'}>
                USD
              </Radio>
              <Radio colorScheme="green" value={'eur'}>
                EUR
              </Radio>
            </HStack>
          </RadioGroup>

          {error ? (
            <Error />
          ) : (
            <HStack wrap={'wrap'} display={'flex'} justifyContent={'center'}>
              {dataArr.map(value => (
                <CoinCard
                  key={value.id}
                  name={value.name}
                  id={value.id}
                  logo={value.symbol}
                  image={value.image}
                  price={value.current_price}
                  currency={currency}
                  symbol={currencySymbol}
                />
              ))}
              <HStack overflow={'scroll'} marginLeft={'20px'}>
                {dataArr.map((value, index) => {
                  return (
                    <>
                      <Button variant={'ghost'} onClick={()=>{setPage(index+1)}}>
                        {index+1}
                      </Button>
                    </>
                  );
                })}
              </HStack>
            </HStack>
          )}
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Loader />
      </>
    );
  }
};



export default Coins;