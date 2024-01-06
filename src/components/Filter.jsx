import React, { useState } from "react";
import { useTodosContext } from "../context/TodosContext";
import Dropdown from "react-dropdown";
import { IoIosArrowDown } from "react-icons/io";
import { FILTER_BY } from "../constants/actions";

const Filter = () => {
  const { dispatch } = useTodosContext();
  const [filter, setFilter] = useState("all");

  const options = [
    { value: "all", label: "All" },
    { value: "done", label: "Done" },
    { value: "undone", label: "Undone" },
  ];

  const filterHandler = (e) => {
    setFilter(e.value);
    dispatch({ type: FILTER_BY, payload: e.value });
  };

  return (
    <Dropdown
      options={options}
      className="todos-filter"
      value={filter}
      arrowClosed={<IoIosArrowDown className="arrow arrow-closed" />}
      arrowOpen={<IoIosArrowDown className="arrow arrow-open" />}
      onChange={(e) => filterHandler(e)}
    />
  );
};

export default Filter;
