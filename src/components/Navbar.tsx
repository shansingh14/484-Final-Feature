import React from "react";
import { Flex, Input, IconButton, Button, Box } from "@chakra-ui/react";
import { SearchIcon, AddIcon } from "@chakra-ui/icons";

interface NavbarProps {
  onOpenCreatePostModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCreatePostModal }) => {
  return (
    <Flex
      as="nav"
      bg="blue.700"
      color="white"
      align="center"
      justify="space-between"
      p="4"
    >
      <Flex align="center">
        <Box fontWeight="bold" fontSize="lg">
          PitchPlot
        </Box>
        <Input
          placeholder="Search Keywords..."
          ml="4"
          bg="white"
          color="black"
          width="300px"
        />
        <IconButton aria-label="Search" icon={<SearchIcon />} ml="2" />
      </Flex>
      <Flex align="center">
        <Button
          onClick={onOpenCreatePostModal}
          leftIcon={<AddIcon />}
          colorScheme="teal"
          variant="solid"
          ml="4"
        >
          Create
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
