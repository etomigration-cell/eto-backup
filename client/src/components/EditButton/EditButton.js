import { FaPencilAlt } from "react-icons/fa"; // Font Awesome Pencil
import "./EditButton.css";

function EditButton({ onClick }) {
  return (
    <button className="edit-btn" onClick={onClick}>
      <FaPencilAlt style={{ marginRight: 4 }} />
      Change
    </button>
  );
}

export default EditButton;
