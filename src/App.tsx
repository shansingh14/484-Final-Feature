import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import CreatePostModal from "./components/CreatePostModal";

const App: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Bob Smith",
      date: "May 27th, 2024",
      content: "Taylor Swift Listening Party...",
      imageUrl: "",
    },
    {
      id: 2,
      author: "Adi Go",
      date: "May 27th, 2024",
      content: "I am really enjoying this new single by Clario!",
      imageUrl: "/path/to/image.jpg",
    },
    {
      id: 3,
      author: "Hugh Ganem",
      date: "May 26th, 2024",
      content: "Billie's new album is fire!!!!!!! 🔥 I LOOOOVE THE PRODUCTION!",
      imageUrl: "/path/to/image2.jpg",
    },
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const addPost = (content: string) => {
    const newPost = {
      id: posts.length + 1,
      author: "New User",
      date: new Date().toLocaleDateString(),
      content,
      imageUrl: "",
    };
    setPosts([newPost, ...posts]);
    onClose();
  };

  return (
    <ChakraProvider>
      <Flex direction="column" height="100vh">
        <Navbar onOpenCreatePostModal={onOpen} />
        <Flex flex="1">
          <Sidebar />
          <Box flex="1" overflowY="auto" p="4">
            <VStack spacing="4">
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </VStack>
          </Box>
        </Flex>
        <CreatePostModal isOpen={isOpen} onClose={onClose} addPost={addPost} />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
