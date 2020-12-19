import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { api } from "../../api";

const SearchContainer = () => {
  const [state, setState] = useState({
    recipeResults: null,
    searchQuery: "",
    error: null,
    loading: false,
  });

  const updateQuery = (event) => {
    const {
      target: { value },
    } = event;

    setState({
      ...state,
      searchQuery: value,
    });
  };

  const searchByQuery = async (query) => {
    try {
      const url = "complexSearch";
      const {
        data: { results: recipeResults },
      } = await api.get(url, {
        params: {
          query: query,
          number: 10,
        },
      });
      setState({
        ...query,
        recipeResults: recipeResults,
        loading: false,
      });
    } catch (err) {
      setState({
        ...state,
        error: err.message,
        loading: false,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState({
      ...state,
      loading: true,
    });
    const { searchQuery } = state;
    if (searchQuery !== "") {
      await searchByQuery(searchQuery);
    }
  };

  const { recipeResults, searchQuery, error, loading } = state;

  return (
    <SearchPresenter
      results={recipeResults}
      searchQuery={searchQuery}
      error={error}
      loading={loading}
      handleSubmit={handleSubmit}
      updateQuery={updateQuery}
    />
  );
};

export default SearchContainer;
