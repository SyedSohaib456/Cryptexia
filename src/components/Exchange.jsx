import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import Loading from './Loading'
import ErrorPage from "./ErrorPage";
import {
  Container,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
  Box
} from "@chakra-ui/react";
function Exchange() {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError]=useState(false)

  useEffect(() => {
    const fetchExchange = async () => {
     try {
      const { data } = await axios.get(`${server}/exchanges`);
      setExchanges(data );
      setLoading(false);
     } catch (error) {
      setError(true)  
      setLoading(false)
     }
    };
    fetchExchange();
  }, [Exchange]);
      
  if (error) return <ErrorPage message=' in fetching Exhanges' />

  return (
    <>
      <Box
        w={"full"}
        minH={"100vh"}
        background={'#1A202C'}
        color={'white'}
        p={[2,2,16]}
      >
        {
          loading? <Loading/> : 
          <>
            <HStack flexWrap={"wrap"} justifyContent={'space-evenly'}>
          {exchanges.map((i) => (
            <ExchangeCard
              key={i.id}
              name={i.name}
              img={i.image}
              rank={i.trust_score_rank}
              url={i.url}
            />
          ))}
        </HStack>
          </>
        }
      
      </Box>
    </>
  );
}
const ExchangeCard = ({ img, rank, name, url }) => (
  <a href={url} target="_blank">
    <VStack w={52} shadow={"lg"} p={8} transition={"all 0.6s"} m={4}
      css={{
       ' &:hover':{
           transform:'scale(1.1)'
        }
      }}
      style={{
        borderRadius: "13px;",
        background: "#171D28",
        boxShadow: [" 5px 5px 10px #090c10, -5px -5px 10px #252e40"],
      }}
    >
      <Image src={img} w={"10"} h={"10"} objectFit={"contain"} alt="Masla" />
      <Heading noOfLines={"1"} size={"ms"}>
        {rank}
      </Heading>
      <Text noOfLines={"1"} textAlign={'center'} >{name}</Text>
    </VStack>
  </a>
);

export default Exchange;
