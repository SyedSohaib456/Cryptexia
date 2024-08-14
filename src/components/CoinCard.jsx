import React from "react";
import { Link } from "react-router-dom";
import { VStack, Image, Heading, Text } from "@chakra-ui/react";

const CoinCard = ({ id, img, name, price, symbol, currencySymbol = "Rs " }) => (
  <Link to={`/coin/${id}`}>
    <VStack
      w={52}
      shadow={"lg"}
      p={8}
      transition={"all 0.6s"}
      m={4}
      css={{
        " &:hover": {
          transform: "scale(1.1)",
        },
      }}
      style={{
        borderRadius: "13px;",
        background: "#171D28",
        boxShadow: [" 5px 5px 10px #090c10, -5px -5px 10px #252e40"],
      }}
    >
      <Image src={img} w={"10"} h={"10"} objectFit={"contain"} alt="Masla" />
      <Heading noOfLines={"1"} size={"ms"}>
        {symbol}
      </Heading>
      <Text noOfLines={"1"} textAlign={"center"}>
        {name}
      </Text>
      <Text noOfLines={"1"} textAlign={"center"}>
        {price ? `${currencySymbol} ${""}${price}` : "NA"}
      </Text>
    </VStack>
  </Link>
);

export default CoinCard;
