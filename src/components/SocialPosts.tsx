import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: "Mom",
      thought: "2482482488",
    },
    {
      title: "Dad",
      thought: "2482482489",
    },
    {
      title: "Wife",
      thought: "2482482480",
    },
  ]);

  const [showForm, setShowForm] = useState(true);

  const [modalIsOpen, setIsOpen] = useState(false);

  const addPost = (post: Post): void => {
    setPosts((prev) => [post, ...prev]);
  };

  const deletePost = (index: number): void => {
    setPosts((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="SocialPosts">
      <h1 className="header">My Thoughts</h1>
      <button className="button-new" onClick={() => openModal()}>
        New Thought
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {modalIsOpen && <PostForm onSubmitForm={addPost}></PostForm>}
      </Modal>
      {/* {showForm && <PostForm onSubmitForm={addPost}></PostForm>} */}
      <div>
        <PostInList posts={posts} onDelete={deletePost}></PostInList>
      </div>
    </div>
  );
};

export default SocialPosts;
