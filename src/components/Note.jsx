import { useContext } from "react";
import PropTypes from "prop-types";
import { DataContext } from "../context/DataContex";

function Note({ colors, id, note, title }) {
  const { getData } = useContext(DataContext);

  const deleteCard = (id) => {
    fetch(`http://localhost:3000/card/${id}`, {
      method: "DELETE",
    }).finally(() => getData());
  };

  return (
    <div className="card" style={{ border: `2px dashed ${colors}`, borderRadius: 10, overflow: "hidden" }}>
      <div style={{ backgroundColor: colors, display: "flex", justifyContent: "space-between", padding: 10 }}>
        <h3>{title}</h3>
        <button onClick={() => deleteCard(id)} style={{ background: "transparent", border: "none", color: "white" }}>
          Delete
        </button>
      </div>
      <div style={{ padding: 10 }}>
        <p>{note}</p>
      </div>
    </div>
  );
}

Note.propTypes = {
  id: PropTypes.number.isRequired,
  note: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.string.isRequired,
};

export default Note;
