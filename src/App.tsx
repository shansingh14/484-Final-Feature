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
import { Route, Routes } from "react-router-dom";
import PostDetail from "./components/PostDetail";
import AlbumDetail from "./components/AlbumDetail";
import FeedContent from "./components/FeedContent"; // Ensure this import is correct
import styles from "./Feed.module.css";

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
      imageUrl: "src/assets/clairo-album.webp",
      albumLink: 'https://open.spotify.com/prerelease/1hk5UEw2cPHm4ceZw3g5o5',
    },
    {
      id: 3,
      author: "Hugh Ganem",
      date: "May 26th, 2024",
      content: "Billie's new album is fire!!!!!!! 🔥 I LOOOOVE THE PRODUCTION!",
      imageUrl: "src/assets/billie-album.jpeg",
      albumLink: 'https://open.spotify.com/album/7aJuG4TFXa2hmE4z1yxc3n',
    },
  ]);

   const { isOpen, onOpen, onClose } = useDisclosure();
   const [searchQuery, setSearchQuery] = useState("");

   const addPost = (content: string, imageUrl: string, albumLink: string) => {
     const newPost = {
       id: posts.length + 1,
       author: "New User",
       date: new Date().toLocaleDateString(),
       content,
       imageUrl,
       albumLink,
     };
     setPosts([newPost, ...posts]);
     onClose();
   };

   const handleSearch = (query: string) => {
     setSearchQuery(query);
   };

   const filteredPosts = posts.filter((post) =>
     post.content.toLowerCase().includes(searchQuery.toLowerCase())
   );

   return (
     <ChakraProvider>
       <Box bg="#FAF9F6" minHeight="100vh">
         <Flex direction="column" height="100vh">
           <Navbar onOpenCreatePostModal={onOpen} onSearch={handleSearch} />
           <Flex flex="1" overflow="hidden">
             <Sidebar />
             <Box flex="1" overflowY="auto" p="4">
               <Routes>
                 <Route
                   path="/"
                   element={<FeedContent posts={filteredPosts} />}
                 />
                 <Route path="/post/:id" element={<PostDetail />} />
                 <Route path="/album/:id" element={<AlbumDetail />} />
               </Routes>
             </Box>
           </Flex>
           <CreatePostModal
             isOpen={isOpen}
             onClose={onClose}
             addPost={addPost}
           />
         </Flex>
       </Box>
     </ChakraProvider>
   );
};

export default App;
