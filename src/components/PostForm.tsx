import { FormEvent, useState } from "react";
import Post from "../models/Post";
import "./PostForm.css";

interface Props {
  onSubmitForm: (post: Post) => void;
}

const PostForm = ({ onSubmitForm }: Props) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onSubmitForm({ title, thought });
  };
  return (
    <form className="PostForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="thought">Thought</label>
      <input
        type="thought"
        name="thought"
        id="thought"
        value={thought}
        onChange={(e) => setThought(e.target.value)}
      ></input>
      <button>Enter</button>
    </form>
  );
};

export default PostForm;
