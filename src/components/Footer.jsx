import { Avatar, Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import "../index.css";
import pfp from "../assets/pfp.jpg";

function Footer() {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"40"}
      px={[5,"16"]}
      pt={["4", "8"]}
      pb={'2'}
      borderTop={"1px solid rgba(164, 164, 164,0.1)"}
    >
      <Stack
        direction={["column", "column", "row"]}
        h={"full"}
        alignItems={"center"}
        justifyContent={"space-between"}
        w={"full"}
      >
        <VStack w={"full"} alignItems={["center", "center", "flex-start"]}>
          <Text fontWeight={"bold"} fontFamily={"Poppins"}>
            About Us
          </Text>
          <Text
            w={'full'}
            fontSize={"sm"}
            textAlign={["center",'center', "left"]}
            fontFamily={"Poppins"}
            letterSpacing={'wide'}
          > 
            We are dedicated to providing you with the highest quality
            cryptocurrency information, completely free of charge. Our mission
            is to ensure that you have access to reliable, up-to-date crypto
            insights without any cost. We believe in the importance of
            empowering individuals with the knowledge they need to navigate the
            world of digital currencies confidently.
          </Text>
        </VStack>

        <VStack
          mt={["8", "8", "0"]}
          w={"full"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text fontWeight={"bold"}>Connect with Me</Text>
          <HStack mt={2}>
            <Box className="social" p={["0", "2"]}>
              <a
                href="https://www.linkedin.com/in/sohaib-hussain-8914612a7/"
                target="_blank"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </Box>
            <Box className="social" p={["0", "2"]}>
              <a href="https://github.com/SyedSohaib456" target="_blank">
                <i className="bx bxl-github"></i>
              </a>
            </Box>
            <Box className="social" p={["0", "2"]}>
              <a
                href="https://www.facebook.com/syed.sohaib.3994885?mibextid=ZbWKwL"
                target="_blank"
              >
                <i className="bx bxl-facebook"></i>
              </a>
            </Box>
            <Box className="social" p={["0", "2"]}>
              <a
                href="https://www.instagram.com/syedsohaib456/?igshid=MTJmNXV6bXZkdXN6cw%3D%3D"
                target="_blank"
              >
                <i className="bx bxl-instagram-alt"></i>
              </a>
            </Box>
          </HStack>
        </VStack>

        <VStack mt={["4", "4", "0"]} w={"full"} alignItems={"center"}>
          <Avatar src={pfp} boxSize={"28"} />
          <Text>Cryptexia Founder</Text>
        </VStack>
      </Stack>
      <HStack
        w={"full"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={["0", "10"]}
      >
        <Text
          textAlign={"center"}
          fontWeight={"thin"}
          color={"whiteAlpha.500"}
          borderTop="1px solid "
          mt={["5", "0"]}
          fontSize={["small", "md"]}
          letterSpacing={'wide'}
        >
          © 2024 Copyright: Cryptexia.com
        </Text>
      </HStack>
    </Box>
  );
}

export default Footer;
