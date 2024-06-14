import React from "react";
import {
  Box,
  Text,
  HStack,
  VStack,
  Avatar,
  Image,
  Center,
  Flex,
} from "@chakra-ui/react";
import { FaHeart, FaComment, FaShare, FaMusic } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface PostProps {
  post: {
    id: number;
    author: string;
    date: string;
    content: string;
    imageUrl: string;
    albumLink: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/album/${post.id}`, {
      state: { imageUrl: post.imageUrl, albumLink: post.albumLink },
    });
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      width="100%"
      p="4"
      bg="white"
      boxShadow="md"
      mb="4"
    >
      <HStack spacing="4" alignItems="center">
        <Avatar name={post.author} />
        <VStack align="start" spacing="0">
          <Text fontWeight="bold">{post.author}</Text>
          <Text fontSize="sm" color="gray.500">
            {post.date}
          </Text>
        </VStack>
      </HStack>
      <Flex direction="column" align="center" mt="4">
        <Text mb="4" textAlign="center">
          {post.content}
        </Text>
        {post.imageUrl && (
          <Box mb="4" onClick={handleImageClick} cursor="pointer">
            <Image
              src={post.imageUrl}
              alt={post.content}
              boxSize="200px"
              objectFit="cover"
              borderRadius="md"
            />
          </Box>
        )}
        <HStack spacing="4">
          <FaHeart />
          <FaComment />
          <FaShare />
          <FaMusic />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Post;
