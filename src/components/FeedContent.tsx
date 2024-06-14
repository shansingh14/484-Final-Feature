import React from "react";
import { VStack } from "@chakra-ui/react";
import Post from "./Post";

interface FeedContentProps {
  posts: {
    id: number;
    author: string;
    date: string;
    content: string;
    imageUrl: string;
    albumLink: string;
  }[];
}

const FeedContent: React.FC<FeedContentProps> = ({ posts }) => {
  return (
    <VStack spacing="4" width="100%" maxWidth="800px" mx="auto">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </VStack>
  );
};

export default FeedContent;
