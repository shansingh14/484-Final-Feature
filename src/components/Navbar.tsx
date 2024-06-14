import React, { useState } from "react";
import { Flex, Input, IconButton, Button, Box, HStack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FaHome, FaLightbulb, FaBook, FaUser } from "react-icons/fa";

interface NavbarProps {
  onOpenCreatePostModal: () => void;
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCreatePostModal, onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <Flex
      as="nav"
      bg="blue.700"
      color="white"
      align="center"
      justify="space-between"
      p="4"
      px="8"
    >
      <HStack spacing="8">
        <Box fontWeight="bold" fontSize="2xl">
          PitchPlot
        </Box>
      </HStack>
      <Flex align="center" flex="1" mx="8">
        <Input
          placeholder="Search Keywords..."
          bg="white"
          color="black"
          borderRadius="full"
          flex="1"
          _placeholder={{ color: "gray.400" }}
          value={searchInput}
          onChange={handleSearchChange}
        />
        <IconButton
          aria-label="Search"
          icon={<SearchIcon />}
          ml="-10"
          borderRadius="full"
          bg="transparent"
          _hover={{ bg: "transparent" }}
        />
      </Flex>
      <HStack spacing="4">
        <Button
          leftIcon={<FaHome />}
          variant="link"
          color="white"
          fontWeight="bold"
        >
          Feed
        </Button>
        <Button
          leftIcon={<FaLightbulb />}
          variant="link"
          color="white"
          fontWeight="bold"
        >
          Your Plots
        </Button>
        <Button
          leftIcon={<FaBook />}
          variant="link"
          color="white"
          fontWeight="bold"
          onClick={onOpenCreatePostModal}
        >
          Create
        </Button>
        <Button
          leftIcon={<FaUser />}
          variant="link"
          color="white"
          fontWeight="bold"
        >
          Account Settings
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
