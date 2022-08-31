import React, { createContext, useState } from "react";
import { catigorys } from "../Data/Catigorys";
import { filterGroup, filtersBrends } from "../Data/Filters";
import { useSort } from '../../hooks/useSort'

export const DataContext = createContext(null)

const Context = ({ children }) => {
  const [categorys, setCategorys] = useState(catigorys);
  const [filtersBrend, setFiltersBrend] = useState(filtersBrends);
  const [filtersGroup, setFiltersGroup] = useState(filterGroup);
  const [filterType, setFilterType] = useState([]);

  const { handleSort } = useSort(categorys)

  return (
    <DataContext.Provider
      value={{
        categorys,
        setCategorys,
        filtersBrend,
        setFiltersBrend,
        filtersGroup,
        setFiltersGroup,
        handleSort,
        filterType,
        setFilterType
      }}>
      {children}
    </DataContext.Provider>
  )
}

export default Context;
