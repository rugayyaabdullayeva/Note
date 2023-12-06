import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const GlobalContext = createContext();
GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
function GlobalProvider({ children }) {
  const [color, setColor] = useState("");
  const [titleInp, setTitleInp] = useState("");
  const [noteInp, setNoteInp] = useState("");
  const [filterParams, setFilterParams] = useState("");


  const resetForm = () => {
    setColor("");
    setTitleInp("");
    setNoteInp("");
  };

  const values = {
    color,
    setColor,
    titleInp,
    setTitleInp,
    noteInp,
    setNoteInp,
    filterParams,
    setFilterParams,
    resetForm,
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

export default GlobalProvider;
