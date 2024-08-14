import {
  Box,
  Container,
  HStack,
  Radio,
  RadioGroup,
  VStack,
  Text,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Progress,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Loader from "./Loading";
import axios from "axios";
import { server } from "../main";
import { useParams } from "react-router-dom";
import Chart from '../components/Chart'

function CoinDetails() {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("usd");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const currencySymbol =
    currency === "pkr" ? "Rs" : currency === "eur" ? "€" : "$";
  
    const btns = ["24h", "7d", "14d", "30d", "60d", "1y", "max"];

    const switchChartStats = (key) => {
      switch (key) {
        case "24h":
          setDays("24h");
          setLoading(true);
          break;
        case "7d":
          setDays("7d");
          setLoading(true);
          break;
        case "14d":
          setDays("14d");
          setLoading(true);
          break;
        case "30d":
          setDays("30d");
          setLoading(true);
          break;
        case "60d":
          setDays("60d");
          setLoading(true);
          break;
        case "1y":
          setDays("365d");
          setLoading(true);
          break;
        case "max":
          setDays("max");
          setLoading(true);
          break;
  
        default:
          setDays("24h");
          setLoading(true);
          break;
      }
    };
  useEffect(() => {
    const fetchCoinDtl = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const {data:chartData} = await axios.get(`${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
        setChartArray(chartData.prices)        
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoinDtl();
  }, [params.id,currency,days]);

  return (
    <Box w={"full"} 
    background={'#1A202C'}
    color={'white'}
    p={4}
 >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box borderWidth={1} style={{padding:'2rem'}} w={"full"}>
            <Chart arr={chartArray} currency={currencySymbol} days={days} />
          </Box>


         <HStack p={4} overflowX={'auto'}>
               {
                 btns.map((i)=>(
                   <Button key={i} onClick={()=>switchChartStats(i)} >{i}</Button>
                 ))
               }
         </HStack>



          <RadioGroup value={currency} onChange={setCurrency}>
            <HStack spacing={"4"} p={"8"}>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"pkr"}>PKR</Radio>
              <Radio value={"eur"}>EURO</Radio>
            </HStack>
          </RadioGroup>

          <VStack w={'full'} p={['1',"16"]} spacing={"4"} alignItems={"flex-start"}>
            <Text fontSize={"small"} alignSelf={"center"} opacity={"0.6"}>
              Last updated on {Date(coin.last_updated).split("G")[0]}
            </Text>

            <Image
              src={coin.image.large}
              w={"16"}
              h={"16"}
              objectFit={"contain"}
            />

            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>
                {currencySymbol}
                {coin.market_data.current_price[currency]}
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    coin.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                />
                {coin.market_data.price_change_percentage_24h}%
              </StatHelpText>
            </Stat>

            <Badge fontSize={"2xl"} color={"white"}>
              {`#${coin.market_cap_rank}`}
            </Badge>
            <CustomBar
              high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
              low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
            />

            <Box w={"full"} p={4}>
              <Item title="Max Supply" value={coin.market_data.max_supply} />
              <Item
                title="Circulating Supply"
                value={coin.market_data.circulating_supply}
              />
              <Item
                title="Market Cap"
                value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
              />
              <Item
                title="All Time Low"
                value={`${currencySymbol}${coin.market_data.atl[currency]}`}
              />
              <Item
                title="All Time High"
                value={`${currencySymbol}${coin.market_data.ath[currency]}`}
              />
            </Box>
          </VStack>
        </>
      )}
    </Box>
  );
}

const Item = ({ title, value }) => (
  <HStack w={"full"} my={4} justifyContent={"space-between"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);

const CustomBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress value={50} colorScheme={"teal"} w={"full"} />{" "}
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme="red" />
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={high} colorScheme="green" />
    </HStack>
  </VStack>
);

export default CoinDetails;
