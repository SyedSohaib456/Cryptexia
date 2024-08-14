import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import {
  Container,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
  Button,
  RadioGroup,
  Radio,
  Box,
} from "@chakra-ui/react";
import CoinCard from "./CoinCard";
function Coins() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const currencySymbol =
    currency === "pkr" ? "Rs" : currency === "eur" ? "€" : "$";

  const ChangePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}&per_page=30`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [currency, page]);

  if (error) return <ErrorPage message=" in fetching Coins" />;

  return (
    <>
      <Box
        w={"full"}
        minH={"100vh"}
        style={{
          backgroundColor: "#1A202C",
          color: "white",
          display:'flex',
          flexDirection:'column',
          justifyContent:'flex-start',
          alignItems:'center'
        }}
        pl={[2,2,16]}
        pr={[2,2,16]}
        pt={2}
        pb={2}

      >
        {loading ? (
          <Loading />
        ) : (
          <>
            <RadioGroup value={currency} onChange={setCurrency}>
              <HStack
                justifyContent={'flex-start'}
                spacing={"4"}
                 pt={4}
                 pb={4}

              
              >
                <Radio value={"usd"}>USD</Radio>
                <Radio value={"pkr"}>PKR</Radio>
                <Radio value={"eur"}>EURO</Radio>
              </HStack>
            </RadioGroup>

            <HStack
             
              flexWrap={"wrap"}
              justifyContent={"space-evenly"}
            >
              {coins.map((i) => (
                <CoinCard
                  id={i.id}
                  price={i.current_price}
                  key={i.id}
                  name={i.name}
                  img={i.image}
                  symbol={i.symbol}
                  url={i.url}
                  currencySymbol={currencySymbol}
                />
              ))}
            </HStack>
            <HStack w={"full"} overflowX={"auto"} p={8}>
              {btns.map((item, index) => (
                <Button
                  key={index}
                  bgColor={"blackAlpha.600"}
                  color={"white"}
                  onClick={() => ChangePage(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
            </HStack>
          </>
        )}
      </Box>
    </>
  );
}

export default Coins;
