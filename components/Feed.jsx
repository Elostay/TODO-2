"use client";

import { useState, useEffect } from "react";

import FilterButtons from "./FilterButtons";

import TodoList from "./TodoList";
import { BASE_URL } from "@constants";
import Cors from "cors";
import initMiddleware from "@helpers/init-middleware";
import { NextApiRequest, NextApiResponse } from "next";

const Feed = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredStatus, setFilteredStatus] = useState([]);

  const [ascending, setAscending] = useState(true);
  const [activeBtn, setActiveBtn] = useState(0);

  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const getAllTasks = `${BASE_URL}/tasks/`;

  const fetchTasks = async () => {
    const response = await fetch(getAllTasks, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filterTasks = (searchText) => {
    const regex = new RegExp(searchText, "i");
    if (tasks.detail) return;
    return tasks.filter((item) => regex.test(item.task));
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);

    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterTasks(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleFilterBtn = async (e, index) => {
    setActiveBtn(index);
    const nameBtn = e.target.name;

    if (tasks.length > 0) {
      switch (nameBtn) {
        case "all":
          setSearchText("");
          await fetchTasks();
          setFilteredStatus(tasks);
          break;
        case "completed":
          setSearchText("");
          await fetchTasks();
          const completedTasks = tasks.filter((task) => task.done === true);
          console.log("💖 ~ handleFilterBtn ~ completedTasks:", completedTasks);
          setFilteredStatus(completedTasks);
          break;
        case "active":
          setSearchText("");
          await fetchTasks();
          const activeTasks = tasks.filter((task) => task.done === false);
          console.log("💖 ~ handleFilterBtn ~ activeTasks:", activeTasks);
          setFilteredStatus(activeTasks);
          break;
        case "sort":
          searchText !== "" && ascending
            ? searchedResults.sort((a, b) => a.rate - b.rate)
            : searchedResults.sort((a, b) => b.rate - a.rate);
          ascending && tasks.length !== 0
            ? tasks.sort((a, b) => a.rate - b.rate)
            : tasks.sort((a, b) => b.rate - a.rate);
          ascending && filteredStatus.length !== 0
            ? filteredStatus.sort((a, b) => a.rate - b.rate)
            : filteredStatus.sort((a, b) => b.rate - a.rate);

          setAscending((prev) => !prev);
          break;
        default:
          break;
      }
    } else return;
  };
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search by a task name"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <FilterButtons handleFilterBtn={handleFilterBtn} activeBtn={activeBtn} />

      {searchText ? (
        <TodoList data={searchedResults} />
      ) : (
        <TodoList data={filteredStatus.length === 0 ? tasks : filteredStatus} />
      )}
    </section>
  );
};

export default Feed;
