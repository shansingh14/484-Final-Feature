import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  addPost: (content: string, imageUrl: string, albumLink: string) => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isOpen,
  onClose,
  addPost,
}) => {
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [albumLink, setAlbumLink] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = () => {
    let finalImageUrl = imageUrl;
    if (file) {
      finalImageUrl = URL.createObjectURL(file);
    }
    addPost(content, finalImageUrl, albumLink);
    setContent("");
    setImageUrl("");
    setAlbumLink("");
    setFile(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
      setImageUrl("");
    }
  };

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
    setFile(null);
  };

  const handleAlbumLinkChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAlbumLink(event.target.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a new post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
          />
          <Tabs mt="4">
            <TabList>
              <Tab>Image URL</Tab>
              <Tab>Upload Image</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Input
                  placeholder="Image URL"
                  value={imageUrl}
                  onChange={handleImageUrlChange}
                />
              </TabPanel>
              <TabPanel>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Input
            mt="4"
            placeholder="Album Link"
            value={albumLink}
            onChange={handleAlbumLinkChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Post
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreatePostModal;
