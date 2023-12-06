import { useEffect} from "react";
import "./App.css";
import { useContext } from "react";
import { DataContext } from "./context/DataContex";
import { GlobalContext } from "./context/GlobalContext";
import Filter from "./components/Filter";
import Note from "./components/Note";
import { nanoid } from "nanoid";

function App() {
  const { data, getData } = useContext(DataContext);
  const { setNoteInp, setColor, setTitleInp, filterParams, titleInp, noteInp, color, resetForm } = useContext(GlobalContext);

  const filteredData = () => {
    const commonData = data.filter(
      (item) =>
        item.title
          .split(" ")
          .some((title) => title.toLowerCase().startsWith(filterParams.toLowerCase())) ||
        item.note
          .split(" ")
          .some((title) => title.toLowerCase().startsWith(filterParams.toLowerCase())),
    );

    return commonData;
  };

  const addToCard = () => {
    const body = {
      title: titleInp,
      note: noteInp,
      colors: color,
    };

    fetch("http://localhost:3000/card", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).finally(() => {
      getData();
      resetForm();
    });
  };

  const handleClick = () => {
    if (titleInp.trim() === "") {
      alert("Please write note title");
    } else if (noteInp.trim() === "") {
      alert("Please write note");
    } else if (color.trim() === "") {
      alert("Please select color");
    } else {
      addToCard();
    }
  };

  useEffect(() => { getData() }, []);

  return (
    <div className="mainDiv">
      <h1> Dada Redux <span style={{ color: "#7e57c2" }}>Note</span>Pad</h1>
      <input type="text" value={titleInp} placeholder="Note Title" className="title"
        onChange={(e) => {
          setTitleInp(e.target.value);
        }}
      />
      <textarea value={noteInp} name="" id="" cols="30" rows="10" placeholder="Write note..." className="note"
        onChange={(e) => {
          setNoteInp(e.target.value);
        }}
      ></textarea>
      <div className="colorSave">
        <div className="colors">
          <div onClick={() => setColor("rgba(240, 98, 146)")} className="color1 color-item">{color == "rgba(240, 98, 146)" && "✓"}</div>
          <div onClick={() => setColor("rgba(186, 104, 200)")} className="color2 color-item">{color == "rgba(186, 104, 200)" && "✓"}</div>
          <div onClick={() => setColor("rgba(79, 195, 247)")} className="color3 color-item">{color == "rgba(79, 195, 247)" && "✓"}</div>
          <div onClick={() => setColor("rgba(255, 213, 79)")} className="color4 color-item">{color == "rgba(255, 213, 79)" && "✓"}</div>
          <div onClick={() => setColor("rgba(174, 213, 129)")} className="color5 color-item">{color == "rgba(174, 213, 129)" && "✓"}</div>
        </div>
        <button onClick={handleClick}>Save</button>
      </div>
      <Filter />
      <div className="cards">
        {(filteredData().length === 0 && filterParams.trim() !== "") ? (
          <h3>A note matching the given parameter was not found</h3>
        ) : (
          filteredData().map((item) => <Note key={nanoid()} {...item} />)
        )}
      </div>
    </div>
  );
}

export default App;
