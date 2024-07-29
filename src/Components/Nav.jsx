import React, { useState } from "react";
import { Box, Text, Stack, Flex, Icon, Heading } from "@chakra-ui/react";
import { MdClose, MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";





const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center"]}
        direction={["column", "row"]}
        paddingTop={[4, 4, 0]}
      >
        <NavLink to='/cart' sx={{ textDecoration: 'none' }}>
          <Text as='b' display="block" fontSize='xl' >
            Cart
          </Text>
        </NavLink>
      </Stack>
    </Box>
  );
};

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      width="100%"
      padding={8}
      bg={"purple.200"}
      color={"black"}
    >

      <Box>
        <NavLink to='/' sx={{ textDecoration: 'none' }}>
          <Heading size='lg'>
            Klipcart
          </Heading>
        </NavLink>
      </Box>
      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {isOpen ? <Icon as={MdClose} /> : <Icon as={MdMenu} />}
      </Box>
      <MenuLinks isOpen={isOpen} />
    </Flex>
  );
}

export default Nav;
