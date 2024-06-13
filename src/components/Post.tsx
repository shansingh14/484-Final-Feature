import React from "react";
import { Box, Text, HStack, VStack, Avatar } from "@chakra-ui/react";
import { FaHeart, FaComment, FaShare, FaMusic } from "react-icons/fa";

interface PostProps {
  post: {
    id: number;
    author: string;
    date: string;
    content: string;
    imageUrl: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      width="100%"
      p="4"
      bg="white"
    >
      <HStack spacing="4">
        <Avatar name={post.author} />
        <VStack align="start" spacing="0">
          <Text fontWeight="bold">{post.author}</Text>
          <Text fontSize="sm" color="gray.500">
            {post.date}
          </Text>
        </VStack>
      </HStack>
      <Text mt="4">{post.content}</Text>
      {post.imageUrl && (
        <Box
          mt="4"
          bgImage={`url(${post.imageUrl})`}
          bgSize="cover"
          bgPos="center"
          height="200px"
          borderRadius="md"
        />
      )}
      <HStack mt="4" spacing="4">
        <FaHeart />
        <FaComment />
        <FaShare />
        <FaMusic />
      </HStack>
    </Box>
  );
};

export default Post;
