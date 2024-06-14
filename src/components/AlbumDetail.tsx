import React from "react";
import { Box, Button, Image, VStack, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const AlbumDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageUrl, albumLink } = location.state as {
    imageUrl: string;
    albumLink: string;
  };

  const handleRecommend = () => {
    // Here you can handle the recommend logic
    // For simplicity, let's navigate back to the feed after "recommending"
    navigate("/");
  };

  const handleListen = () => {
    window.open(albumLink, "_blank");
  };

  return (
    <Box p="4" textAlign="center">
      <VStack spacing="4">
        <Image src={imageUrl} alt="Album" boxSize="400px" objectFit="cover" />
        <Button colorScheme="teal" onClick={handleRecommend}>
          Recommend
        </Button>
        <Button colorScheme="blue" onClick={handleListen}>
          Listen to this Album
        </Button>
      </VStack>
    </Box>
  );
};

export default AlbumDetail;
