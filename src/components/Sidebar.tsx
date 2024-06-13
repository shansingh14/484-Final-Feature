import React from "react";
import { Box, VStack, Avatar, Text, HStack } from "@chakra-ui/react";

const Sidebar: React.FC = () => {
  return (
    <Box width="250px" bg="gray.100" p="4">
      <VStack align="start">
        <Text fontWeight="bold">Friends</Text>
        <VStack align="start" spacing="4">
          <HStack>
            <Avatar name="Adigo" />
            <Box>
              <Text>Adigo</Text>
              <Text fontSize="sm" color="green.500">
                Online
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Avatar name="Hughy" />
            <Box>
              <Text>Hughy</Text>
              <Text fontSize="sm" color="red.500">
                Offline
              </Text>
            </Box>
          </HStack>
          {/* Add more friends as needed */}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Sidebar;
