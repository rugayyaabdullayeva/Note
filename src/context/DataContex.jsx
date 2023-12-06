import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const DataContext = createContext();

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function DataProvider({ children }) {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("http://localhost:3000/card")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };

  const values = {
    data,
    setData,
    getData,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}

export default DataProvider;
