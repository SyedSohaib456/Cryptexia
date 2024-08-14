import { Stack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Btc from "../assets/btc.png";
import { motion } from "framer-motion";
function Home() {
  return (

    <Stack
      direction={["column",'column', "row"]}
      w={"full"}
      h={"92vh"}
      bgColor={"blackAlpha.900"}
      alignItems={'center'}
      style={{
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        padding:'10rem,0'
      }}


    >
      <VStack w={['80%','70%','40%']}>
      <Text
        fontSize={["7xl",'7xl', "9xl"]}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        fontFamily={"Bebas Neue"}
      >
        Cryptexia
      </Text>
      <Text
        fontSize={["xl", "3xl"]}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.500"}
        fontFamily={"Bebas Neue"}
      >
        Unlock the world of digital assets with Cryptexia. Your gateway to top-tier crypto insights and trends
      </Text>
      </VStack>
      <motion.div
        
        style={{
          height:'80vh'
        }}

        animate={{
          translateY:'20px'
        }}
        transition={{
          repeat:Infinity,
          duration:2,
          repeatType:'reverse'
        }}
        
      >

      <Image
         className="homeImg"
        display={'inline'}
        src={Btc}
        h={["full",'50%','full']}
        w={["full"]}
        mt={['-4','0']}
        objectFit={"contain"}
        filter={"grayscale(1)"}
      />

      </motion.div>
    </Stack>
  );
}

export default Home;
