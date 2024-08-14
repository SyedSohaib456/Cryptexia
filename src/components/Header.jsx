import { Button, HStack, VStack,Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <> 
      <HStack
        color={'white'}
        p={4}
        bgColor={"black"}
        justifyContent={["space-between", "space-between"]}
        spacing={['0',"10"]}
        shadow={"base"}
        borderBottom={"1px solid rgba(164, 164, 164,0.1)"}
        w={'full'}
        overflow={'hidden'}

      >
       <Text pl={[0,5]} fontWeight={'bold'} fontSize={['xl','xl','2xl']}  fontFamily={"Exo"} cursor={'pointer'} >Cryptexia </Text>
         <HStack spacing={10} pr={[0,5]}>

         <Button
          className=" navButton  hidden sm:hidden  lg:inline-block"
          variant={"unstyled"}
          color="white"
          _hover={{ borderBottom: "2px solid gray" }}
          pt={2}
          pb={2}
          borderRadius={"none"}
          transition={"all 0.1s"}
        >
          <Link className=" hidden sm:hidden lg:block" to={"/"}>
            Home
          </Link>
        </Button>
        <Button
          variant={"unstyled"}
          color="white"
          _hover={{ borderBottom: "2px solid gray" }}
          pt={2}
          pb={2}
          borderRadius={"none"}
          transition={"all 0.1s"}
        >
          <Link className="navButton hidden sm:hidden lg:block" to={"/exchange"}>
            Exchanges
          </Link>
        </Button>
        <Button
          variant={"unstyled"}
          color="white"
          _hover={{ borderBottom: "2px solid gray" }}
          pt={2}
          pb={2}
          borderRadius={"none"}
          transition={"all 0.1s"}
        >
          <Link className="navButton hidden sm:hidden lg:block" to={"/coins"}>
            Coins
          </Link>
        </Button>8
         </HStack>
       

         <div className="lg:hidden">
  <BiMenuAltRight id="menu" className="text-2xl text-white" style={{ color: 'white !important' }} onClick={onOpen} />
</div>

      </HStack>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay bg={"transparent"} className="drop" />
        <DrawerContent bg={"transparent"} className="drop">
          <DrawerCloseButton />
          <DrawerHeader textAlign={"center"} fontSize="4xl"  color={'white'}>
            Cryptexia
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"center"} justifyContent={"center"}>
              <Button
                variant={"unstyled"}
                color="white"
                _hover={{ borderBottom: "2px solid gray" }}
                pt={2}
                pb={2}
                borderRadius={"none"}
                transition={"all 0.1s"}
                onClick={onClose}
              >
                <Link to={"/"}>Home</Link>
              </Button>
              <Button
                variant={"unstyled"}
                color="white"
                _hover={{ borderBottom: "2px solid gray" }}
                pt={2}
                pb={2}
                borderRadius={"none"}
                transition={"all 0.1s"}
                onClick={onClose}
              >
                <Link to={"/exchange"}>Exchanges</Link>
              </Button>
              <Button
                variant={"unstyled"}
                color="white"
                _hover={{ borderBottom: "2px solid gray" }}
                pt={2}
                pb={2}
                w={"fit-content"}
                borderRadius={"none"}
                transition={"all 0.1s"}
                onClick={onClose}
              >
                <Link to={"/coins"}>Coins</Link>
              </Button>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" color={"white"} mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
