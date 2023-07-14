import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Exchange_card from './Exchange_card';
import Error from './Error';
import { Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';

const Exchange = () => {
  const [dataArr, setDataArr] = useState([]);
  const [error, setError] = useState(false);
  const [isThereData, setData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/exchanges?per_page=50'
        );
        setDataArr(response.data);
        setData(true)
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, []);

  if(isThereData === true){
    return (
      <>
        <Container maxW="1285px">
          {error ? (
            <Error />
          ) : (
            <HStack wrap={'wrap'} display={'flex'} justifyContent={'center'}>
              {dataArr.map(value => (
                <Exchange_card
                  key={value.id}
                  name={value.name}
                  url={value.url}
                  image={value.image}
                  rank={value.trust_score_rank}
                />
              ))}
            </HStack>
          )}
        </Container>
      </>
    );
} else {
  return(
    <>
      <Loader />
    </>
  )
}

};

export default Exchange;
