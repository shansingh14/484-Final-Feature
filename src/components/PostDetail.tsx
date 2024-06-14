import React from "react";
import { useParams } from "react-router-dom";
import { Box, Text, VStack, Avatar, Image } from "@chakra-ui/react";

const PostDetail: React.FC = () => {
  const { id } = useParams();
  // For now, let's use placeholder data
  const post = {
    id,
    author: "Adi Go",
    date: "May 27th, 2024",
    content:
      "I am really enjoying this new single by Clario! Love the direction she is taking her music. Can not wait for the album",
    imageUrl: "/path/to/image.jpg",
  };

  return (
    <Box p="4">
      <VStack spacing="4" align="start">
        <HStack spacing="4">
          <Avatar name={post.author} />
          <VStack align="start" spacing="0">
            <Text fontWeight="bold">{post.author}</Text>
            <Text fontSize="sm" color="gray.500">
              {post.date}
            </Text>
          </VStack>
        </HStack>
        <Text>{post.content}</Text>
        {post.imageUrl && <Image src={post.imageUrl} alt={post.content} />}
      </VStack>
    </Box>
  );
};

export default PostDetail;
