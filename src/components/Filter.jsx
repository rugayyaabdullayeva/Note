import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Filter() {
  const { filterParams, setFilterParams } = useContext(GlobalContext);

  const handleSearch = (e) => {
    setFilterParams(e.target.value);
  };

  return (
    <input
      type="text"
      value={filterParams}
      onChange={handleSearch}
      placeholder="Search..."
      className="search"
    />
  );
}

export default Filter;
