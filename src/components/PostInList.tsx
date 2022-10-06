import Post from "../models/Post";
import "./PostInList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Props {
  posts: Post[];
  onDelete: (index: number) => void;
}

const PostInList = ({ posts, onDelete }: Props) => {
  return (
    <div className="PostInList">
      <ul>
        {posts.map((post, index) => (
          <li>
            <div className="post-item">
              <div className="post-left">
                <h2 className="post-header">{post.title}</h2>
                <p className="post-body">{post.thought}</p>
              </div>

              <div className="post-right">
                <button
                  className="delete-button"
                  onClick={() => onDelete(index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostInList;
